// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../../config/sequelize");

// class Spotlight extends Model {}

// Spotlight.init(
//   {
//     services: {
//       type: DataTypes.JSON,
//       allowNull: false,
//       comment: "Array of services Data.",
//     }
//   },
//   {
//     sequelize,
//     modelName: "spotlight",
//     timestamps: true,
//   }
// );

// module.exports = Spotlight;




const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  detail: String,
  image: String,
  isActive: { type: Boolean, default: true }
});

const SpotlightSchema = new mongoose.Schema({
  services: [ServiceSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Spotlight', SpotlightSchema);