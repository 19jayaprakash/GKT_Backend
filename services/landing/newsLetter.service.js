const NewsLetter = require('../../models/landing/NewsLetter');
async function getNewsLetter(){
    try{
        const newsLetter=await NewsLetter.findOne();
        return newsLetter;
    }catch(error){
        console.error("Error in newsLetter service (getNewsLetter):", error);
        throw new Error('Failed to retrieve newsLetter data.');
    }
}
module.exports={
    getNewsLetter,
};