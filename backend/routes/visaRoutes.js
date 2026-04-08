const express = require("express");
const router = express.Router();

const { trackVisa, addVisa } = require("../controllers/visaController");

// ✅ TRACK visa
router.get("/track", trackVisa);

// ✅ ADD visa
router.post("/", addVisa);

module.exports = router;