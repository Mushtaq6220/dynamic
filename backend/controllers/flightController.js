const Flight = require("../models/Flight");
const {
  GULF_COUNTRY_AIRPORTS,
  HYDERABAD_AIRPORT_CODE,
  fetchAviationstackFlights,
  normalizeFlightResults,
} = require("../services/aviationstackService");

const gulfCodes = new Set(Object.values(GULF_COUNTRY_AIRPORTS).flat());

function isHydGulfFlight(flight) {
  const origin = String(flight.origin || "").toUpperCase();
  const destination = String(flight.destination || "").toUpperCase();
  return (
    (origin === HYDERABAD_AIRPORT_CODE && gulfCodes.has(destination)) ||
    (destination === HYDERABAD_AIRPORT_CODE && gulfCodes.has(origin))
  );
}

// ✅ GET all flights
const getFlights = async (req, res) => {
  try {
    const data = await Flight.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ ADD new flight
const addFlight = async (req, res) => {
  try {
    const { flightNo, origin, destination, status } = req.body;

    if (!flightNo || !origin || !destination || !status) {
      return res.status(400).json({
        message: "flightNo, origin, destination, and status are required",
      });
    }

    const newFlight = new Flight(req.body);
    await newFlight.save();
    res.status(201).json(newFlight);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getGulfFlights = async (req, res) => {
  try {
    const liveResponse = await fetchAviationstackFlights();

    if (liveResponse.enabled) {
      const gulfFlights = normalizeFlightResults(liveResponse.results)
        .filter(isHydGulfFlight)
        .slice(0, 20);

      if (gulfFlights.length > 0) {
        return res.json({
          source: "aviationstack",
          flights: gulfFlights,
        });
      }
    }

    const fallbackFlights = await Flight.find();
    const gulfFlights = fallbackFlights.filter(isHydGulfFlight);

    return res.json({
      source: "database",
      flights: gulfFlights,
      message:
        liveResponse.message ||
        "Falling back to database flights because Aviationstack is not configured",
    });
  } catch (error) {
    try {
      const fallbackFlights = await Flight.find();
      const gulfFlights = fallbackFlights.filter(isHydGulfFlight);

      return res.json({
        source: "database",
        flights: gulfFlights,
        message: "Aviationstack unavailable, using local database flights instead",
      });
    } catch (fallbackError) {
      return res.status(500).json({ message: error.message });
    }
  }
};

module.exports = {
  getFlights,
  getGulfFlights,
  addFlight
};
