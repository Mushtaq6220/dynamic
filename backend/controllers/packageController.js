const Package = require("../models/Package");

// ✅ GET all packages
const getPackages = async (req, res) => {
  try {
    const data = await Package.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ CREATE new package
const createPackage = async (req, res) => {
  try {
    const { name, price, days } = req.body;

    if (!name || price === undefined || days === undefined) {
      return res.status(400).json({
        message: "name, price, and days are required",
      });
    }

    const newPackage = new Package(req.body);
    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPackages,
  createPackage
};
