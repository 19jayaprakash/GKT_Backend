const mongoose=require('mongoose')

const clientschema=new mongoose.Schema({
    logo:[
        {
            clientname:{
                type:String,
                required:true
            },
            image:{
                type:String,
                required:true
            }
        }
    ]
})

module.exports = mongoose.model('Client', clientschema ,'Client')