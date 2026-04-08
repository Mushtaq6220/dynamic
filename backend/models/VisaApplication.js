const mongoose = require("mongoose");

const visaApplicationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    passportNo: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    visaType: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["submitted", "processing", "approved", "rejected"],
      default: "submitted",
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("VisaApplication", visaApplicationSchema);
