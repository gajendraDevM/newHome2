const mongoose = require('mongoose');

const Schema = mongoose.Schema

const clientSchema = new Schema({

    client_name: {

        type: String,
        trim: true,
        required: [true, 'is required'],
    },

 phone_number:{
      type:String,
        trim:true,
        required:[true,'is required']

    },
    email:{
        type:String,
        trim:true,
        required:[true,'is required']
    },
    address:{
        type:String,
        required:[true,'is required']
        
    },
  other_phone:{
        type:[String]   
    },
    customer_type:{

        type:String,
        required:true
    },
     location:{

        district:String,
       state:String
    },
    property_size: {

        sqft: String,
        cm:String,
        feet:String
        
    },
    isFurnist:{
        
        type:String,
        default:true
    }
   
 
}, { timestamps: true })



module.exports = mongoose.model('Client', clientSchema)