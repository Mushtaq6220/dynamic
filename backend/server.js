require("dotenv").config(); // MUST be first

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Import Routes (correct paths)
const packageRoutes = require("./routes/packageRoutes");
const visaRoutes = require("./routes/visaRoutes");
const flightRoutes = require("./routes/flightRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");
const timetableRoutes = require("./routes/timetableRoutes");
const futureFlightRoutes = require("./routes/futureFlightRoutes");

// ✅ Use Routes
app.use("/api/packages", packageRoutes);
app.use("/api/visa", visaRoutes);
app.use("/api/flights", flightRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/timetable", timetableRoutes);
app.use("/api/future-flights", futureFlightRoutes);

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// ✅ MongoDB Connection
connectDB();

// ✅ Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
