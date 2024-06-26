const BookingData = require("../models/userModel");
const createBooking = async (req, res) => {
  const {
    firstName,
    lastName,
    wheels,
    vehicleModel,
    vehicleType,
    startDate,
    vehicleTypeName,
    endDate,
    vehicleModelName,
  } = req.body;


  const bookingExists = await BookingData.findOne({
    where: {
      firstName: firstName,
      lastName: lastName,
      vehicleTypeId: vehicleType,
      vehicleModelId: vehicleModel,
      vehicleTypeName,
      vehicleModelName,
    },
  });

  if (bookingExists) {
    return res.status(400).json({ msg: "User already booked!!" });
  }

  try {
    const newBooking = await BookingData.create({
      firstName,
      lastName,
      vehicleModelId: vehicleModel,
      vehicleTypeId: vehicleType,
      wheelId: wheels,
      startDate,
      endDate,
      vehicleTypeName,
      vehicleModelName,
    });

    console.log("Booking created:", newBooking);
    res
      .status(201)
      .json({ message: "Booking created successfully", booking: newBooking });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Failed to create booking" });
  }
};

const getBookedData = async (req, res) => {
  try {
    const bookings = await BookingData.findAll();
    res.status(200).json({ bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
};




module.exports = { createBooking, getBookedData };