const headerService = require('../../services/landing/header.service');
async function getHeaderController(req, res) {
  try {
    const header = await headerService.getHeader();

    if (!header) {
      return res.status(404).json({ 
        message: 'Header configuration not found.' 
      });
    }
    res.status(200).json(header);

  } catch (error) {
    res.status(500).json({ 
      message: 'Internal server error while fetching header data.', 
      error: error.message 
    });
  }
}

module.exports = {
  getHeaderController,
};