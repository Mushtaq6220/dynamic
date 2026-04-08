const {
  TIMETABLE_AIRPORTS,
  fetchAviationstackTimetable,
  normalizeTimetableResults,
} = require("../services/aviationstackService");

const getGulfTimetable = async (req, res) => {
  try {
    const type = req.query.type === "arrival" ? "arrival" : "departure";
    const requestedAirport = String(req.query.airport || "").toUpperCase();
    const airport = TIMETABLE_AIRPORTS.includes(requestedAirport)
      ? requestedAirport
      : "JED";

    const response = await fetchAviationstackTimetable({
      iataCode: airport,
      type,
    });

    if (!response.enabled) {
      return res.json({
        source: "disabled",
        airport,
        type,
        results: [],
        airports: TIMETABLE_AIRPORTS,
        message: response.message,
      });
    }

    return res.json({
      source: "aviationstack",
      airport,
      type,
      airports: TIMETABLE_AIRPORTS,
      results: normalizeTimetableResults(response.results).slice(0, 20),
      pagination: response.pagination,
    });
  } catch (error) {
    return res.json({
      source: "error",
      airport: String(req.query.airport || "JED").toUpperCase(),
      type: req.query.type === "arrival" ? "arrival" : "departure",
      airports: TIMETABLE_AIRPORTS,
      results: [],
      message: error.message,
    });
  }
};

module.exports = {
  getGulfTimetable,
};
