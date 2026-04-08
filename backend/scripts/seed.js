require("dotenv").config();

const connectDB = require("../config/db");
const Package = require("../models/Package");
const Flight = require("../models/Flight");
const Inquiry = require("../models/Inquiry");
const VisaApplication = require("../models/VisaApplication");

function dateOffset(days) {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + days);
  return date;
}

const packageData = [
  {
    name: "Umrah Super Saver",
    price: 74999,
    days: 7,
    route: "Kolkata - Jeddah - Makkah - Madinah - Jeddah",
    hotel: "3 Star",
    included: ["Visa", "Shared Transport", "Daily Breakfast", "Ziyarat Tour"],
    plan: "Economy",
    category: "Super Saver",
    departureCity: "Kolkata",
    packageType: "Umrah Departures",
    badge: "Budget Friendly",
    overview: "A practical Umrah package designed for value-focused pilgrims.",
    nights: "4 Nights Makkah / 3 Nights Madinah",
    transport: "Shared coach",
    mealPlan: "Breakfast",
    season: "All Season",
    featured: true,
  },
  {
    name: "Deluxe Umrah Departure",
    price: 109999,
    days: 10,
    route: "Mumbai - Madinah - Makkah - Jeddah",
    hotel: "4 Star",
    included: ["Visa", "Airport Transfers", "Breakfast", "Guided Ziyarat"],
    plan: "Family",
    category: "Deluxe",
    departureCity: "Mumbai",
    packageType: "Umrah Departures",
    badge: "Most Popular",
    overview: "Balanced comfort, guided support, and quality stay near the Haramain.",
    nights: "5 Nights Makkah / 5 Nights Madinah",
    transport: "Private airport transfer",
    mealPlan: "Breakfast",
    season: "Ramadan & Regular",
    featured: true,
  },
  {
    name: "Luxury Umrah Signature",
    price: 184999,
    days: 12,
    route: "Delhi - Madinah - Makkah - Jeddah",
    hotel: "5 Star",
    included: ["Visa", "Luxury Hotel", "Private Transport", "VIP Assistance"],
    plan: "Premium",
    category: "Luxury",
    departureCity: "Delhi",
    packageType: "Umrah Departures",
    badge: "Premium Stay",
    overview: "Premium Umrah experience with luxury accommodation and dedicated assistance.",
    nights: "6 Nights Makkah / 6 Nights Madinah",
    transport: "Private premium vehicle",
    mealPlan: "Breakfast & Dinner",
    season: "Peak Season",
    featured: true,
  },
  {
    name: "Hajj Special Package",
    price: 689999,
    days: 18,
    route: "Lucknow - Jeddah - Makkah - Mina - Arafat - Madinah",
    hotel: "Premium Camp & Hotel",
    included: ["Hajj Visa Support", "Scholarly Guidance", "Internal Transport", "Meal Plan"],
    plan: "Group",
    category: "Hajj Special",
    departureCity: "Lucknow",
    packageType: "Hajj Special Package",
    badge: "Limited Seats",
    overview: "A complete Hajj-focused arrangement with guided rituals and logistics support.",
    nights: "10 Nights Makkah / 5 Nights Madinah / Hajj days in camps",
    transport: "Hajj transport arrangement",
    mealPlan: "Full Board",
    season: "Hajj Season",
    featured: true,
  },
];

const flightData = [
  {
    flightNo: "6E101",
    airline: "IndiGo",
    origin: "HYD",
    destination: "JED",
    departureDate: dateOffset(2),
    departureTime: "06:30",
    arrivalDate: dateOffset(2),
    arrivalTime: "10:15",
    terminal: "T1",
    gate: "A12",
    status: "scheduled",
    notes: "Morning Umrah departure",
    source: "manual",
    scheduleTime: "06:30",
  },
  {
    flightNo: "SV527",
    airline: "Saudia",
    origin: "JED",
    destination: "HYD",
    departureDate: dateOffset(5),
    departureTime: "22:10",
    arrivalDate: dateOffset(6),
    arrivalTime: "05:40",
    terminal: "N",
    gate: "C4",
    status: "scheduled",
    notes: "Return group sector",
    source: "manual",
    scheduleTime: "22:10",
  },
  {
    flightNo: "AI964",
    airline: "Air India",
    origin: "DEL",
    destination: "MED",
    departureDate: dateOffset(7),
    departureTime: "14:20",
    arrivalDate: dateOffset(7),
    arrivalTime: "19:05",
    terminal: "T3",
    gate: "B7",
    status: "scheduled",
    notes: "Madinah group batch",
    source: "manual",
    scheduleTime: "14:20",
  },
  {
    flightNo: "EK571",
    airline: "Emirates",
    origin: "DXB",
    destination: "BOM",
    departureDate: dateOffset(9),
    departureTime: "16:45",
    arrivalDate: dateOffset(9),
    arrivalTime: "21:25",
    terminal: "3",
    gate: "D2",
    status: "scheduled",
    notes: "India return via Dubai",
    source: "manual",
    scheduleTime: "16:45",
  },
];

const inquiryData = [
  {
    name: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "9876543210",
    destination: "Dubai",
    travelers: 2,
    message: "Need package details for May travel.",
    status: "new",
  },
  {
    name: "Ayesha Khan",
    email: "ayesha@example.com",
    phone: "9123456780",
    destination: "Bali",
    travelers: 2,
    message: "Looking for honeymoon options.",
    status: "contacted",
  },
];

const visaData = [
  {
    fullName: "Rahul Sharma",
    passportNo: "N1234567",
    country: "UAE",
    visaType: "Tourist",
    status: "processing",
    notes: "Documents verified",
  },
  {
    fullName: "Ayesha Khan",
    passportNo: "P7654321",
    country: "Singapore",
    visaType: "Tourist",
    status: "approved",
    notes: "Visa approved and ready for dispatch",
  },
];

const seedData = async () => {
  try {
    await connectDB();

    await Package.deleteMany();
    await Flight.deleteMany();
    await Inquiry.deleteMany();
    await VisaApplication.deleteMany();

    await Package.insertMany(packageData);
    await Flight.insertMany(flightData);
    await Inquiry.insertMany(inquiryData);
    await VisaApplication.insertMany(visaData);

    console.log("Seed data inserted successfully");
    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error.message);
    process.exit(1);
  }
};

seedData();
