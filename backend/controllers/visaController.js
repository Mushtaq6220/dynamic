const Visa = require("../models/VisaApplication");

// ✅ TRACK visa by passport number
const trackVisa = async (req, res) => {
  try {
    const { passportNo } = req.query;

    if (!passportNo) {
      return res.status(400).json({ message: "passportNo is required" });
    }

    const visa = await Visa.findOne({ passportNo });

    if (!visa) {
      return res.status(404).json({ message: "Visa not found" });
    }

    res.json(visa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ ADD new visa
const addVisa = async (req, res) => {
  try {
    const { fullName, passportNo, country, visaType } = req.body;

    if (!fullName || !passportNo || !country || !visaType) {
      return res.status(400).json({
        message: "fullName, passportNo, country, and visaType are required",
      });
    }

    const existingVisa = await Visa.findOne({ passportNo });

    if (existingVisa) {
      return res.status(409).json({
        message: "Visa application already exists for this passport number",
      });
    }

    const newVisa = new Visa(req.body);
    await newVisa.save();
    res.status(201).json(newVisa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  trackVisa,
  addVisa
};
