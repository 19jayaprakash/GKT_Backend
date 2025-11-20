const Header = require('../../models/landing/Header');
async function getHeader() {
  try {
    const header = await Header.findOne();
    return header;
  } catch (error) {
    console.error("Error in header service (getHeader):", error);
    throw new Error('Failed to retrieve header data.'); 
  }
}

module.exports = {
  getHeader,
};