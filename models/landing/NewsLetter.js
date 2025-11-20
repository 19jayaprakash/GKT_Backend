const mongoose = require('mongoose');

const NewsLetterSchema = new mongoose.Schema({
  logo: { 
    type: String,
    },
    description: {
    type: String,
    },
    description1:{
    type: String,
    },
    link:{
        name:{type:String},
        url:{type:String}
    },
    subLogo:[
        {type:String}
    ]
   
}, {
    timestamps: false
});

module.exports = mongoose.model('NewsLetter', NewsLetterSchema);