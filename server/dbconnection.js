const { Sequelize } = require("sequelize");

const sequelized = new Sequelize({
  host: process.env.HOST,
  user: process.env.USER,
  password: '',
  database: "vehicle",
  dialect: "mysql",
})

async function dbConn() {
  try {
    await sequelized.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

}


module.exports = { sequelized, dbConn }
