const Footer = require('../../models/landing/Footer');

async function getFooter() {
  try {
    const footer = await Footer.findOne();
    return footer;
  } catch (error) {
    console.error("Error in footer service (getFooter):", error);
    throw new Error('Failed to retrieve footer data.'); 
  }
}

module.exports = {
  getFooter,
};