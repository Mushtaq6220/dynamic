const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
  {
  name: String,
  price: Number,
  days: Number,
  route: String,
  hotel: String,
  included: [String],
  plan: String,
  category: {
    type: String,
    default: "Deluxe",
  },
  departureCity: String,
  packageType: {
    type: String,
    default: "Umrah",
  },
  badge: String,
  overview: String,
  nights: String,
  transport: String,
  mealPlan: String,
  season: String,
  featured: {
    type: Boolean,
    default: false,
  },
  }
);

// ✅ IMPORTANT EXPORT
module.exports = mongoose.model("Package", packageSchema);
