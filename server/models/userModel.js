const { DataTypes } = require("sequelize");
const { sequelized } = require("../dbconnection");
const { Wheel, VehicleModel, VehicleType } = require("./VehicleModel");

const BookingData = sequelized.define(
  "BookingData",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    wheelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Wheel,
          key: "id",
        },
    },

    vehicleTypeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    vehicleModelName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    vehicleModelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: VehicleModel,
        key: "id",
      },
    },

    vehicleTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: VehicleType,
        key: "id",
      },
    },
    
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },

  {
    timestamps: false,
  }
);

module.exports =  BookingData ;