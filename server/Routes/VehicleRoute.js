const express = require("express");
const {
  getWhellerInfo,
  getVehicleType,
  getVehicleModal,
} = require("../Controller/VehicleController");
const router = express.Router();
router.route("/").get(getWhellerInfo);
router.route("/vehicleType/:id").get(getVehicleType);
router.route("/vehicleModel/:id").get(getVehicleModal);

module.exports = router;