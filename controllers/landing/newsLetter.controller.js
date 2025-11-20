const newsLetterService = require('../../services/landing/newsLetter.service');

async function getNewsLetterController(req, res){
    try{
        const newsLetter = await newsLetterService.getNewsLetter();
        if(!newsLetter){
            return res.status(404).json({
                message: 'NewsLetter configuration not found.'
            });
        } 
        res.status(200).json(newsLetter);  
    }
    catch(error){
        res.status(500).json({
            message: 'Internal server error while fetching NewsLetter data.',
            error: error.message
        });
    }
}
module.exports = {
    getNewsLetterController,
};