/*
const express = require("express");
const { connectMongoDB } = require("./config/db-config");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();

connectMongoDB();

app.use(express.json());
app.use(cookieParser());

//Define a simple route for the root URL
app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/api/users", require("./routes/users-route"));
app.use("/api/events",require("./routes/events-route"));
app.use("/api/payments", require("./routes/payments-route"));
app.use("/api/bookings", require("./routes/bookings-route"));
app.use("/api/reports", require("./routes/reports-route"));

const port = process.env.PORT || 5000; // do not use 3000 because lots of people use 3000 port

app.listen(port, () => {
  console.log(`Node+Express server is running on port ${port}`);
});
*/

const express = require("express");
const { connectMongoDB } = require("./config/db-config");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectMongoDB();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Root Route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// API Routes
app.use("/api/users", require("./routes/users-route"));
app.use("/api/events", require("./routes/events-route"));
app.use("/api/payments", require("./routes/payments-route"));
app.use("/api/bookings", require("./routes/bookings-route"));
app.use("/api/reports", require("./routes/reports-route"));

// Server Configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
