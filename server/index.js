const dotenv=require('dotenv').config();
const express=require('express')
const cors=require('cors');
const { dbConn } = require('./dbconnection');
const { VehicleType,VehicleModel } = require('./models/VehicleModel');
const VehicleRoute =require('./Routes/VehicleRoute')
const BookingRoute=require('./Routes/BookingRoute')

const app=express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    return res.send("This is the backend");
  });
  
  app.use("/api/booking", BookingRoute);
  app.use("/api/vehicle", VehicleRoute);

  

// const port= process.env.PORT || 5000;
const port =5000


app.listen(port, async () => {
    try {
      await dbConn();
    } catch (error) {
      console.log(error);
    }
    console.log(`My port is running on ${port}`);
  });


