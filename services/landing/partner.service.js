const Partner = require('../../models/landing/Partner');

class PartnerService {
    async getPartner() {
        try {
            // Get the first (and should be only) header document
            let partner = await Partner.findOne()            
            return partner;
        } catch (error) {
            throw new Error(`Error fetching header: ${error.message}`);
        }
    }
  }
  module.exports = new PartnerService();
