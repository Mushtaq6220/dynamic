const GULF_AIRPORT_CODES = new Set([
  "JED",
  "MED",
  "RUH",
  "DMM",
  "TUU",
  "AHB",
  "ELQ",
  "DOH",
  "DXB",
  "DWC",
  "AUH",
  "SHJ",
  "RKT",
  "MCT",
  "SLL",
  "KWI",
  "BAH",
]);

function normalizeFlights(payload) {
  const records = Array.isArray(payload?.data)
    ? payload.data
    : Array.isArray(payload)
      ? payload
      : [];

  return records.map((flight, index) => ({
    _id: flight.fr24_id || flight.id || `${flight.callsign || "flight"}-${index}`,
    flightNo: flight.flight || flight.callsign || "Unknown",
    origin:
      flight.orig_iata ||
      flight.orig_icao ||
      flight.origin ||
      flight.airport?.origin ||
      "Unknown",
    destination:
      flight.dest_iata ||
      flight.dest_icao ||
      flight.destination ||
      flight.airport?.destination ||
      "Unknown",
    status:
      flight.status?.text ||
      flight.status ||
      flight.live_status ||
      "Live",
    scheduleTime:
      flight.datetime_takeoff ||
      flight.last_seen ||
      flight.scheduleTime ||
      "Live",
    source: "flightradar24",
  }));
}

function isGulfFlight(flight) {
  const origin = String(flight.origin || "").toUpperCase();
  const destination = String(flight.destination || "").toUpperCase();

  return GULF_AIRPORT_CODES.has(origin) || GULF_AIRPORT_CODES.has(destination);
}

async function fetchGulfFlightsFromFR24() {
  const token = process.env.FR24_API_TOKEN;

  if (!token) {
    return {
      enabled: false,
      flights: [],
      message: "FR24_API_TOKEN is not configured",
    };
  }

  const endpoint =
    process.env.FR24_API_URL ||
    "https://fr24api.flightradar24.com/api/live/flight-positions/light";

  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Accept-Version": "v1",
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`FR24 request failed: ${response.status} ${errorText}`);
  }

  const payload = await response.json();
  const normalized = normalizeFlights(payload);
  const gulfFlights = normalized.filter(isGulfFlight).slice(0, 20);

  return {
    enabled: true,
    flights: gulfFlights,
    message: "Live Gulf flights loaded from Flightradar24",
  };
}

module.exports = {
  GULF_AIRPORT_CODES,
  isGulfFlight,
  fetchGulfFlightsFromFR24,
};
