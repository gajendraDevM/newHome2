const mongoose = require('mongoose');

const Schema = mongoose.Schema

const clientSchema = new Schema({

    client_name: {

        type: String,
        trim: true,
        required: [true, 'is required'],
    },
    client_requirement : {
       type: String,
        
    },
    company_name: {

        type: String,
        trim: true,
       default:'-'
    },
    client_id: {

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
    other_emails : {

  type:[String] 
    },
    customer_type:{

        type:String,
        required:true
    },
     location:[Array],
    property_size: {

        sqft: String,
        cm:String,
        feet:String
        
    },
    isfurnished:{
        
        type:String,
        default:true
    },
    bugjet_info : {
        bugjet_price:Number,
        bugjet_unit:String,
    },
    comment:{
        
        type:String,
        default:true
    }
 
}, { timestamps: true })



module.exports = mongoose.model('Client', clientSchema)