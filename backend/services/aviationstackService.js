const GULF_COUNTRY_AIRPORTS = {
  SaudiArabia: ["JED", "MED", "RUH", "DMM"],
  UAE: ["DXB", "AUH", "SHJ"],
  Qatar: ["DOH"],
  Kuwait: ["KWI"],
  Bahrain: ["BAH"],
  Oman: ["MCT", "SLL"],
};

const HYDERABAD_AIRPORT_CODE = "HYD";
const INDIA_MAJOR_AIRPORTS = ["HYD", "BOM", "DEL", "MAA", "BLR"];

const TIMETABLE_AIRPORTS = Array.from(
  new Set([...INDIA_MAJOR_AIRPORTS, ...Object.values(GULF_COUNTRY_AIRPORTS).flat()])
);

const timetableCache = new Map();
const TIMETABLE_CACHE_TTL_MS = 10 * 60 * 1000;
const TIMETABLE_RATE_LIMIT_COOLDOWN_MS = 60 * 1000;

function getTimetableCacheKey({ iataCode, type }) {
  return `${String(iataCode || "").toUpperCase()}-${type}`;
}

function getCachedTimetable(key) {
  const entry = timetableCache.get(key);

  if (!entry) {
    return null;
  }

  if (entry.expiresAt < Date.now()) {
    timetableCache.delete(key);
    return null;
  }

  return entry;
}

async function fetchAviationstackFutureFlights({
  iataCode,
  type = "departure",
  date,
}) {
  const accessKey = process.env.AVIATIONSTACK_API_KEY;

  if (!accessKey) {
    return {
      enabled: false,
      results: [],
      message: "AVIATIONSTACK_API_KEY is not configured",
    };
  }

  const params = new URLSearchParams({
    access_key: accessKey,
    iataCode,
    type,
    date,
  });

  const response = await fetch(
    `https://api.aviationstack.com/v1/flightsFuture?${params.toString()}`
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Aviationstack future flights request failed: ${response.status} ${errorText}`
    );
  }

  const payload = await response.json();

  if (payload.error) {
    throw new Error(payload.error.message || "Aviationstack returned an error");
  }

  return {
    enabled: true,
    results: Array.isArray(payload.data)
      ? payload.data
      : Array.isArray(payload.results)
        ? payload.results
        : [],
    pagination: payload.pagination || null,
  };
}

async function fetchAviationstackFlights() {
  const accessKey = process.env.AVIATIONSTACK_API_KEY;

  if (!accessKey) {
    return {
      enabled: false,
      results: [],
      message: "AVIATIONSTACK_API_KEY is not configured",
    };
  }

  const params = new URLSearchParams({
    access_key: accessKey,
    limit: "100",
  });

  const response = await fetch(
    `https://api.aviationstack.com/v1/flights?${params.toString()}`
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Aviationstack flights request failed: ${response.status} ${errorText}`
    );
  }

  const payload = await response.json();

  if (payload.error) {
    throw new Error(payload.error.message || "Aviationstack returned an error");
  }

  return {
    enabled: true,
    results: Array.isArray(payload.data) ? payload.data : [],
    pagination: payload.pagination || null,
  };
}

async function fetchAviationstackTimetable({ iataCode, type = "departure" }) {
  const cacheKey = getTimetableCacheKey({ iataCode, type });
  const cachedEntry = getCachedTimetable(cacheKey);
  const accessKey = process.env.AVIATIONSTACK_API_KEY;

  if (!accessKey) {
    return {
      enabled: false,
      results: [],
      message: "AVIATIONSTACK_API_KEY is not configured",
    };
  }

  if (cachedEntry?.cooldownUntil && cachedEntry.cooldownUntil > Date.now()) {
    return {
      enabled: true,
      cached: true,
      results: cachedEntry.results,
      pagination: cachedEntry.pagination,
      message: "Showing cached timetable because Aviationstack rate limit is active",
    };
  }

  const params = new URLSearchParams({
    access_key: accessKey,
    iataCode,
    type,
  });

  const response = await fetch(
    `https://api.aviationstack.com/v1/timetable?${params.toString()}`
  );

  if (!response.ok) {
    const errorText = await response.text();

    if (response.status === 429) {
      if (cachedEntry) {
        timetableCache.set(cacheKey, {
          ...cachedEntry,
          cooldownUntil: Date.now() + TIMETABLE_RATE_LIMIT_COOLDOWN_MS,
        });

        return {
          enabled: true,
          cached: true,
          results: cachedEntry.results,
          pagination: cachedEntry.pagination,
          message:
            "Showing cached timetable because Aviationstack rate limit was reached",
        };
      }
    }

    throw new Error(
      `Aviationstack timetable request failed: ${response.status} ${errorText}`
    );
  }

  const payload = await response.json();

  if (payload.error) {
    if (payload.error.code === "rate_limit_reached" && cachedEntry) {
      timetableCache.set(cacheKey, {
        ...cachedEntry,
        cooldownUntil: Date.now() + TIMETABLE_RATE_LIMIT_COOLDOWN_MS,
      });

      return {
        enabled: true,
        cached: true,
        results: cachedEntry.results,
        pagination: cachedEntry.pagination,
        message:
          "Showing cached timetable because Aviationstack rate limit was reached",
      };
    }

    throw new Error(payload.error.message || "Aviationstack returned an error");
  }

  const results = Array.isArray(payload.data)
    ? payload.data
    : Array.isArray(payload.results)
      ? payload.results
      : [];

  timetableCache.set(cacheKey, {
    results,
    pagination: payload.pagination || null,
    expiresAt: Date.now() + TIMETABLE_CACHE_TTL_MS,
    cooldownUntil: 0,
  });

  return {
    enabled: true,
    results,
    pagination: payload.pagination || null,
  };
}

function normalizeTimetableResults(results = []) {
  return results.map((item, index) => ({
    _id:
      item.flight?.iataNumber ||
      item.flight?.number ||
      item.airline?.iataCode ||
      `tt-${index}`,
    airline: item.airline?.name || "Unknown Airline",
    airlineCode: item.airline?.iataCode || "",
    flightNo: item.flight?.iataNumber || item.flight?.number || "Unknown",
    departureAirport: item.departure?.airport || "",
    departureCode: item.departure?.iataCode || "",
    departureTime:
      item.departure?.scheduledTime ||
      item.departure?.estimatedTime ||
      item.departure?.actualTime ||
      "",
    arrivalAirport: item.arrival?.airport || "",
    arrivalCode: item.arrival?.iataCode || "",
    arrivalTime:
      item.arrival?.scheduledTime ||
      item.arrival?.estimatedTime ||
      item.arrival?.actualTime ||
      "",
    terminal: item.departure?.terminal || item.arrival?.terminal || "",
    gate: item.departure?.gate || item.arrival?.gate || "",
    status: item.status || "scheduled",
  }));
}

function normalizeFlightResults(results = []) {
  return results.map((item, index) => ({
    _id:
      item.flight?.iata ||
      item.flight?.icao ||
      item.flight?.number ||
      `as-flight-${index}`,
    airline: item.airline?.name || "Unknown Airline",
    flightNo:
      item.flight?.iata ||
      item.flight?.icao ||
      item.flight?.number ||
      "Unknown",
    origin: item.departure?.iata || item.departure?.airport || "Unknown",
    destination: item.arrival?.iata || item.arrival?.airport || "Unknown",
    status: item.flight_status || "scheduled",
    scheduleTime:
      item.departure?.scheduled ||
      item.departure?.estimated ||
      item.arrival?.scheduled ||
      "",
    source: "aviationstack",
  }));
}

function normalizeFutureFlightResults(results = []) {
  return results.map((item, index) => ({
    _id:
      item.flight?.iataNumber ||
      item.flight?.number ||
      item.flight?.iata ||
      `future-${index}`,
    airline: item.airline?.name || "Unknown Airline",
    flightNo:
      item.flight?.iataNumber ||
      item.flight?.iata ||
      item.flight?.number ||
      "Unknown",
    departureAirport: item.departure?.airport || "",
    departureCode: item.departure?.iataCode || item.departure?.iata || "",
    departureDate:
      item.flight_date ||
      item.departure?.scheduledDate ||
      item.departure?.date ||
      "",
    departureTime:
      item.departure?.scheduledTime ||
      item.departure?.scheduled ||
      item.departure?.estimatedTime ||
      "",
    arrivalAirport: item.arrival?.airport || "",
    arrivalCode: item.arrival?.iataCode || item.arrival?.iata || "",
    arrivalDate:
      item.flight_date ||
      item.arrival?.scheduledDate ||
      item.arrival?.date ||
      "",
    arrivalTime:
      item.arrival?.scheduledTime ||
      item.arrival?.scheduled ||
      item.arrival?.estimatedTime ||
      "",
    terminal: item.departure?.terminal || item.arrival?.terminal || "",
    gate: item.departure?.gate || item.arrival?.gate || "",
    status: item.status || item.flight_status || "scheduled",
  }));
}

function filterFutureFlightResults(
  results = [],
  { from, to, onlyScheduled = false } = {}
) {
  const normalizedFrom = String(from || "").toUpperCase();
  const normalizedTo = String(to || "").toUpperCase();

  return results.filter((item) => {
    const departureCode = String(item.departureCode || "").toUpperCase();
    const arrivalCode = String(item.arrivalCode || "").toUpperCase();
    const status = String(item.status || "").toLowerCase();

    if (normalizedFrom && departureCode !== normalizedFrom) {
      return false;
    }

    if (normalizedTo && arrivalCode !== normalizedTo) {
      return false;
    }

    if (onlyScheduled && status !== "scheduled") {
      return false;
    }

    return true;
  });
}

module.exports = {
  GULF_COUNTRY_AIRPORTS,
  HYDERABAD_AIRPORT_CODE,
  INDIA_MAJOR_AIRPORTS,
  TIMETABLE_AIRPORTS,
  filterFutureFlightResults,
  fetchAviationstackFlights,
  fetchAviationstackFutureFlights,
  fetchAviationstackTimetable,
  normalizeFlightResults,
  normalizeFutureFlightResults,
  normalizeTimetableResults,
};
