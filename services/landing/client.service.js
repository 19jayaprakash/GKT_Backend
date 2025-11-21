const Client = require('../../models/landing/Client');

class ClientService {
    async getClient() {
        try {
            // Get the first (and should be only) header document
            let client = await Client.findOne()
            // console.log(client);
            
            return client;
        } catch (error) {
            throw new Error(`Error fetching header: ${error.message}`);
        }
    }
  }
  module.exports = new ClientService();
