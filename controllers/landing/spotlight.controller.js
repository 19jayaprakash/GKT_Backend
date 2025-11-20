const spotlightService = require('../../services/landing/spotlight.service');
async function getSpotlightController(req, res) {
    try {
        const spotlight = await spotlightService.getSpotlight();
        if (!spotlight) {
            return res.status(404).json({
                message: 'Spotlight configuration not found.'
            });
        }
        res.status(200).json(spotlight);
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error while fetching spotlight data.',
            error: error.message
        });
    }
}
module.exports = {
    getSpotlightController,
};