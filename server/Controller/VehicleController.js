const { Wheel, VehicleType, VehicleModel } = require("../models/VehicleModel");
const getWhellerInfo = async (req, res) => {
  let wheels = await Wheel.findAll();
  return res.status(200).json({ wheels });
};
const getVehicleType = async (req, res) => {
  const { id } = req.params;
  if (!id) console.error("wheel id not found");
  let vehicles = await VehicleType.findAll({
    where: {
      wheelId: id,
    },
  });
  return res.status(200).json({ vehicles });
};
const getVehicleModal = async (req, res) => {
  const { id } = req.params;
  if (!id) console.error("wheel id not found");
  let vehiclesModels = await VehicleModel.findAll({
    where: {
      vehicleTypeId: id,
    },
  });
  return res.status(200).json({ vehiclesModels });
};
module.exports = { getWhellerInfo, getVehicleType, getVehicleModal };