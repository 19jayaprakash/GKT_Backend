const footerService = require('../../services/landing/footer.service');

async function getFooterController(req, res) {
  try {
    const footer = await footerService.getFooter();

    if (!footer) {
      return res.status(404).json({ message: 'Footer configuration not found.' });
    }

    res.status(200).json(footer);
  } catch (error) {
    res.status(500).json({ 
      message: 'Internal server error while fetching footer data.', 
      error: error.message 
    });
  }
}

module.exports = {
  getFooterController,
};