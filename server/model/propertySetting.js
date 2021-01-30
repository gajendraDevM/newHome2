const mongoose = require('mongoose');

const Schema = mongoose.Schema

const propertySettingsSchema = new Schema({
   

        district:{ 
            
            type:String
        
        },
        state:{ 
            
            type:String
        
        },
        locality:{ 
            
            type:String
        
        }
    

}, { timestamps: true })



module.exports = mongoose.model('PropertyLocation', propertySettingsSchema)