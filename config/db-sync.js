// require('dotenv').config();
// const sequelize = require("./sequelize");
// const Header = require("../models/landing/Header"); 
// const Footer = require("../models/landing/Footer");
// const Spotlight = require("../models/landing/Spotlight");
// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     console.log("Database synchronized with Sequelize models.");
//   })
//   .catch((error) => {
//     console.error("Error synchronizing database:", error);
//   });


const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/gkt_website');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;