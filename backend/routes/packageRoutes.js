const express = require("express");
const router = express.Router();

const { getPackages, createPackage } = require("../controllers/packageController");

// ✅ GET all packages
router.get("/", getPackages);

// ✅ CREATE new package
router.post("/", createPackage);

module.exports = router;