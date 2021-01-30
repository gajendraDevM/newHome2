const mongoose = require('mongoose');

const Schema = mongoose.Schema

const propertySchema = new Schema({

    property_name: {

        type: String,
        trim: true,
        required: [true, 'is required'],
    },


owner_info :{

    phone_number:String,
    email:String,
    address:String,
    other_address: [String],
    contact_by:{ type: String, lowercase: true, trim: true },
    other_phone:{
        type:[String]   
     }
},



    builder:{

        type:String,
    },
    

 location:{

        district:String,
       state:String,
       locality:String
    },


    property_info: {

        super_area: String,
        status:String,
        transection_type:String,
        ownership_type:String,
        bed_room:Number,
        bath_room:Number,
        furnished_status:String,
        car_parking:Number,
        floor:Number,
        balconies:Number,
        store_room: Number,
        sale_type:String,
        construction_status:String
   
    },

    property_type:{

        property_catagory:String,
        property_type_info:String

    },
 

    price_info:{

       total_price:Number,
       unit:String,
       inSqft:{

        type:String,
        default:''
       
       }
        

    },

    description:{
        type:String,
        default:true
        
    },

    property_gallery:{

        type:[String]
    }
   
 
}, { timestamps: true })



module.exports = mongoose.model('Property', propertySchema)