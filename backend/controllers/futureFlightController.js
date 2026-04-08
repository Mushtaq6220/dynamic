const {
  GULF_COUNTRY_AIRPORTS,
  HYDERABAD_AIRPORT_CODE,
  INDIA_MAJOR_AIRPORTS,
  filterFutureFlightResults,
  fetchAviationstackFutureFlights,
  normalizeFutureFlightResults,
} = require("../services/aviationstackService");

const SUPPORTED_ROUTE_AIRPORTS = Array.from(
  new Set([...INDIA_MAJOR_AIRPORTS, ...Object.values(GULF_COUNTRY_AIRPORTS).flat()])
);
const GULF_ROUTE_AIRPORTS = Object.values(GULF_COUNTRY_AIRPORTS).flat();

function isIndianAirport(code) {
  return INDIA_MAJOR_AIRPORTS.includes(code);
}

function isGulfAirport(code) {
  return GULF_ROUTE_AIRPORTS.includes(code);
}

function getTodayStart() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
}

function getDateOffset(days) {
  const date = getTodayStart();
  date.setDate(date.getDate() + days);
  return date;
}

function toDateKey(date) {
  return date.toISOString().split("T")[0];
}

function getAllowedFutureDates() {
  const dates = [];

  for (let day = 8; day <= 14; day += 1) {
    dates.push(toDateKey(getDateOffset(day)));
  }

  return dates;
}

function isDateWithinAllowedWindow(dateString) {
  if (!dateString) {
    return false;
  }

  const target = new Date(`${dateString}T00:00:00`);

  if (Number.isNaN(target.getTime())) {
    return false;
  }

  const minimum = getDateOffset(8);
  const maximum = getDateOffset(14);

  return target >= minimum && target <= maximum;
}

const getFutureFlights = async (req, res) => {
  try {
    const type = req.query.type === "arrival" ? "arrival" : "departure";
    const airport = String(req.query.airport || HYDERABAD_AIRPORT_CODE).toUpperCase();
    const from = String(req.query.from || "").toUpperCase();
    const to = String(req.query.to || "").toUpperCase();
    const date = req.query.date;
    const isRouteSearch = Boolean(from || to);
    const requestedDates = isRouteSearch && !date ? getAllowedFutureDates() : [date];

    if (!isRouteSearch && !date) {
      return res.status(400).json({ message: "date is required in YYYY-MM-DD format" });
    }

    if (date && !isDateWithinAllowedWindow(date)) {
      return res.status(400).json({
        message: "date must be between 8 and 14 days from today for future flight search",
      });
    }

    if (isRouteSearch && !SUPPORTED_ROUTE_AIRPORTS.includes(from)) {
      return res.status(400).json({
        message: "from airport is not supported for this Gulf route search",
      });
    }

    if (isRouteSearch && to && !SUPPORTED_ROUTE_AIRPORTS.includes(to)) {
      return res.status(400).json({
        message: "to airport is not supported for this Gulf route search",
      });
    }

    if (isRouteSearch && to) {
      const validDirectionalRoute =
        (isIndianAirport(from) && isGulfAirport(to)) ||
        (isGulfAirport(from) && isIndianAirport(to));

      if (!validDirectionalRoute) {
        return res.status(400).json({
          message: "select an India to Gulf or Gulf to India route only",
        });
      }
    }

    const requestedAirport = isRouteSearch ? from : airport;
    const requestedType = isRouteSearch ? "departure" : type;

    const responses = await Promise.all(
      requestedDates.map((requestDate) =>
        fetchAviationstackFutureFlights({
          iataCode: requestedAirport,
          type: requestedType,
          date: requestDate,
        })
      )
    );

    const firstDisabled = responses.find((response) => !response.enabled);

    if (firstDisabled) {
      return res.json({
        source: "disabled",
        airport: requestedAirport,
        from,
        to,
        type: requestedType,
        date: date || "",
        dateRange: requestedDates,
        results: [],
        message: firstDisabled.message,
      });
    }

    const normalized = normalizeFutureFlightResults(
      responses.flatMap((response) => response.results || [])
    );
    const filtered = (isRouteSearch
      ? filterFutureFlightResults(normalized, {
          from,
          to,
          onlyScheduled: true,
        })
      : normalized.filter((item) => String(item.status || "").toLowerCase() === "scheduled")
    ).slice(0, 20);

    return res.json({
      source: "aviationstack",
      airport: requestedAirport,
      from,
      to,
      type: requestedType,
      date: date || "",
      dateRange: requestedDates,
      allowedAirports: SUPPORTED_ROUTE_AIRPORTS,
      results: filtered,
      pagination: responses[0]?.pagination || null,
    });
  } catch (error) {
    return res.json({
      source: "error",
      airport: String(req.query.from || req.query.airport || HYDERABAD_AIRPORT_CODE).toUpperCase(),
      from: String(req.query.from || "").toUpperCase(),
      to: String(req.query.to || "").toUpperCase(),
      type: req.query.type === "arrival" ? "arrival" : "departure",
      date: req.query.date || "",
      dateRange: req.query.date ? [req.query.date] : getAllowedFutureDates(),
      allowedAirports: SUPPORTED_ROUTE_AIRPORTS,
      results: [],
      message: error.message,
    });
  }
};

module.exports = {
  getFutureFlights,
};
