const mongoose=require('mongoose')

const partnerschema=new mongoose.Schema({
    logo:[
            {
                type:String,
                required:true
            }
    ]
})

module.exports = mongoose.model('Partner', partnerschema ,'Partner')