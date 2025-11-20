const Spotlight = require('../../models/landing/Spotlight');
async function getSpotlight(){
    try{
        const spotlight=await Spotlight.findOne();
        return spotlight;
    }catch(error){
        console.error("Error in spotlight service (getSpotlight):", error);
        throw new Error('Failed to retrieve spotlight data.');
    }
}
module.exports={
    getSpotlight,
};