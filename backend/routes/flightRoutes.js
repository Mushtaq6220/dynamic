const express = require("express");
const router = express.Router();

const {
  getFlights,
  getGulfFlights,
  addFlight,
  searchFlights,
} = require("../controllers/manualFlightController");

// ✅ GET all flights
router.get("/", getFlights);
router.get("/search", searchFlights);
router.get("/gulf", getGulfFlights);

// ✅ ADD new flight
router.post("/", addFlight);

module.exports = router;
