const partnerService = require('../../services/landing/partner.service');

class PartnerController {
    async getPartner(req, res) {
        try {
            const partner = await partnerService.getPartner();
            res.status(200).json(partner);
        } catch (error) {
            console.error('Error in getclient:', error);
            res.status(500).json({ 
                message: 'Error fetching client data', 
                error: error.message 
            });
        }
    }
  }
  module.exports=new PartnerController()