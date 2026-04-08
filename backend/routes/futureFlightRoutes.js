const express = require("express");
const router = express.Router();

const { getFutureFlights } = require("../controllers/futureFlightController");

router.get("/", getFutureFlights);

module.exports = router;
