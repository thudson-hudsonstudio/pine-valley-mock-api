const express = require('express');
const app = express();

app.use(express.json());

const company = {
  name: "Pine Valley Hospitality Group",
  tagline: "Real Comfort, Real Hospitality – Welcome to Pine Valley",
  overview: "Family-owned regional hotel chain operating across northern New England."
};

const locations = [
  { name: "Pine Valley Inn", city: "Portland, ME" },
  { name: "Pine Valley Lodge", city: "Bar Harbor, ME" },
  { name: "Pine Valley Suites", city: "Burlington, VT" },
  { name: "Pine Valley Lakefront Resort", city: "Laconia, NH" }
];

const departments = [
  "Reservations", "Guest Services", "Housekeeping", "Maintenance",
  "Events & Catering", "Accounting", "Human Resources", "IT Support"
];

const employees = [
  { name: "Sarah Ellis", role: "Front Desk Manager", department: "Guest Services", extension: 101 },
  { name: "Mark Jennings", role: "Reservations Supervisor", department: "Reservations", extension: 102 },
  { name: "Carla Rodriguez", role: "Housekeeping Lead", department: "Housekeeping", extension: 103 },
  { name: "Tom Keene", role: "Maintenance Supervisor", department: "Maintenance", extension: 104 },
  { name: "Emily Ross", role: "Event Coordinator", department: "Events & Catering", extension: 105 },
  { name: "Linda Patel", role: "General Manager", department: "Guest Services", extension: 106 },
  { name: "Jason Liu", role: "Finance Director", department: "Accounting", extension: 107 },
  { name: "Brittany Hayes", role: "HR Coordinator", department: "Human Resources", extension: 108 }
];

const hours = [
  { department: "Reservations", hours: "6:00 AM–10:00 PM" },
  { department: "Front Desk", hours: "24/7" },
  { department: "Housekeeping", hours: "7:00 AM–5:00 PM" },
  { department: "Maintenance", hours: "8:00 AM–8:00 PM" },
  { department: "Events", hours: "By appointment" }
];

const callReasons = [
  "Room bookings and availability questions",
  "Changing or cancelling reservations",
  "Requests for amenities (wake-up calls, extra towels, late check-out)",
  "Lost & found inquiries",
  "Billing and receipts",
  "Event/meeting planning and quotes",
  "Group travel/discounts",
  "Career opportunities and HR inquiries",
  "Technical support (WiFi, TV, phone issues)"
];

const features = [
  "Pet-friendly rooms",
  "Complimentary breakfast and WiFi",
  "Lakeside and mountain-view options",
  "Shuttle service to local attractions",
  "Sustainable operations emphasis"
];

app.get('/company', (req, res) => res.json(company));
app.get('/locations', (req, res) => res.json(locations));
app.get('/departments', (req, res) => res.json(departments));
app.get('/employees', (req, res) => res.json(employees));
app.get('/hours', (req, res) => res.json(hours));
app.get('/callReasons', (req, res) => res.json(callReasons));
app.get('/features', (req, res) => res.json(features));

app.listen(process.env.PORT || 3000, () => {
  console.log('Mock API running...');
});
