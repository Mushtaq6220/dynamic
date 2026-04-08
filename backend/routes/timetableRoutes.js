const express = require("express");
const router = express.Router();

const { getGulfTimetable } = require("../controllers/timetableController");

router.get("/gulf", getGulfTimetable);

module.exports = router;
