const express = require("express");
const router = express.Router();
const { createBooking, getBookedData} = require("../Controller/BookingController");

router.post("/create", createBooking);
router.get("/", getBookedData);

module.exports = router;