// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../../config/sequelize");

// class Header extends Model {}

// Header.init(
//   {
//     logo: {
//       type: DataTypes.JSON,
//       allowNull: false,
//       comment: "URL path to the company logo.",
//     },
//     languageOptions: {
//       type: DataTypes.JSON,
//       allowNull: false,
//       defaultValue: [],
//       comment: "Array of available language strings.",
//     },
//     menu: {
//       type: DataTypes.JSON,
//       allowNull: false,
//       defaultValue: [],
//       comment: "Array of menu objects with title and url.",
//     },
//   },
//   {
//     sequelize,
//     modelName: "header",
//     timestamps: true,
//   }
// );

// module.exports = Header;


const mongoose = require('mongoose');

const SubLinkSchema = new mongoose.Schema({
  title: String,
  url: String,
  isActive: { type: Boolean, default: true }
});

const MenuSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  isDropdown: { type: Boolean, default: false },
  subLinks: [SubLinkSchema] 
});

const LanguageSchema = new mongoose.Schema({
  code: String,
  label: String,
  isDefault: Boolean
});

const LogoSchema = new mongoose.Schema({
  img: String,
  theme: String
});

const HeaderSchema = new mongoose.Schema({
  logo: [LogoSchema],
  languageOptions: [LanguageSchema],
  menu: [MenuSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Header', HeaderSchema);