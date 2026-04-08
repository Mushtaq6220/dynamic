const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    default: "Manual Schedule",
    trim: true,
  },
  origin: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  destination: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  departureDate: {
    type: Date,
    required: true,
  },
  departureTime: {
    type: String,
    required: true,
    trim: true,
  },
  arrivalDate: {
    type: Date,
    required: true,
  },
  arrivalTime: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    default: "scheduled",
    trim: true,
    lowercase: true,
  },
  notes: {
    type: String,
    default: "",
    trim: true,
  },
  source: {
    type: String,
    default: "manual",
    trim: true,
    lowercase: true,
  },
  scheduleTime: {
    type: String,
    default: "",
  },
});

// ✅ IMPORTANT EXPORT
module.exports = mongoose.model("Flight", flightSchema);
