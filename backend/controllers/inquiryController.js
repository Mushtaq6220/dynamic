const Inquiry = require("../models/Inquiry");


const getInquiries = async (req, res) => {
  try {
    const data = await Inquiry.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const createInquiry = async (req, res) => {
  try {
    const newInquiry = new Inquiry(req.body);
    await newInquiry.save();
    res.status(201).json(newInquiry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getInquiries,
  createInquiry
};
