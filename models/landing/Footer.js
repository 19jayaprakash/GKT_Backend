// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../../config/sequelize");

// class Footer extends Model {}

// Footer.init(
//   {
//     sections: {
//       type: DataTypes.JSON,
//       allowNull: false,
//       defaultValue: [],
//       comment: "Array of section objects containing title and links.",
//     },
//     copyright: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       comment: "The copyright text for the footer.",
//     },
//   },
//   {
//     sequelize,
//     modelName: "footer",
//     timestamps: true,
//   }
// );

// module.exports = Footer;


const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
  title: String,
  url: String,
  isActive: { 
    type: Boolean, 
    default: true 
  }
});

const SectionSchema = new mongoose.Schema({
  sectionTitle: { type: String, required: true },
  isActive: { 
    type: Boolean, 
    default: true 
  },
  links: [LinkSchema]
});

const FooterSchema = new mongoose.Schema({
  sections: [SectionSchema],
  copyright: { type: String, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Footer', FooterSchema);