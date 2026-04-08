const Flight = require("../models/Flight");

const INDIA_MAJOR_AIRPORTS = ["HYD", "BOM", "DEL", "MAA", "BLR"];
const GULF_AIRPORTS = ["JED", "MED", "RUH", "DMM", "DXB", "AUH", "SHJ", "DOH", "KWI", "BAH", "MCT", "SLL"];

function getTodayStart() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
}

function getDayOffset(days) {
  const date = getTodayStart();
  date.setDate(date.getDate() + days);
  return date;
}

function isSupportedRoute(origin, destination) {
  const from = String(origin || "").toUpperCase();
  const to = String(destination || "").toUpperCase();

  return (
    (INDIA_MAJOR_AIRPORTS.includes(from) && GULF_AIRPORTS.includes(to)) ||
    (GULF_AIRPORTS.includes(from) && INDIA_MAJOR_AIRPORTS.includes(to))
  );
}

const getFlights = async (req, res) => {
  try {
    const data = await Flight.find().sort({ departureDate: 1, departureTime: 1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addFlight = async (req, res) => {
  try {
    const {
      airline,
      origin,
      destination,
      departureDate,
      departureTime,
      arrivalDate,
      arrivalTime,
      status,
      notes,
    } = req.body;

    if (
      !origin ||
      !destination ||
      !departureDate ||
      !departureTime ||
      !arrivalDate ||
      !arrivalTime
    ) {
      return res.status(400).json({
        message: "route, departure, and arrival details are required",
      });
    }

    if (!isSupportedRoute(origin, destination)) {
      return res.status(400).json({
        message: "Only India to Gulf or Gulf to India Umrah routes are allowed",
      });
    }

    const newFlight = new Flight({
      airline,
      origin,
      destination,
      departureDate,
      departureTime,
      arrivalDate,
      arrivalTime,
      status: status || "scheduled",
      notes,
      source: "manual",
      scheduleTime: `${departureDate} ${departureTime}`,
    });

    await newFlight.save();
    res.status(201).json(newFlight);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getGulfFlights = async (req, res) => {
  try {
    const today = getTodayStart();
    const next14 = getDayOffset(14);
    const flights = await Flight.find({
      departureDate: { $gte: today, $lte: next14 },
      status: "scheduled",
    }).sort({ departureDate: 1, departureTime: 1 });

    return res.json({
      source: "database",
      flights,
      message: "Showing admin-managed Umrah route schedules",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const searchFlights = async (req, res) => {
  try {
    const from = String(req.query.from || "").toUpperCase();
    const to = String(req.query.to || "").toUpperCase();

    if (!from || !to) {
      return res.status(400).json({ message: "from and to are required" });
    }

    if (!isSupportedRoute(from, to)) {
      return res.status(400).json({
        message: "Only India to Gulf or Gulf to India Umrah routes are allowed",
      });
    }

    const today = getTodayStart();
    const next14 = getDayOffset(14);
    const results = await Flight.find({
      origin: from,
      destination: to,
      status: "scheduled",
      departureDate: { $gte: today, $lte: next14 },
    }).sort({ departureDate: 1, departureTime: 1 });

    return res.json({
      source: "database",
      from,
      to,
      dateRange: [today.toISOString(), next14.toISOString()],
      results,
      message: "Showing manual schedules entered from the admin panel",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getFlights,
  getGulfFlights,
  addFlight,
  searchFlights,
};
