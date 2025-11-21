const clientService = require('../../services/landing/client.service');

class ClientController {
    async getClient(req, res) {
        try {
            const client = await clientService.getClient();
            res.status(200).json(client);
        } catch (error) {
            console.error('Error in getclient:', error);
            res.status(500).json({ 
                message: 'Error fetching client data', 
                error: error.message 
            });
        }
    }
  }
  module.exports=new ClientController()