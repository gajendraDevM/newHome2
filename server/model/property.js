const mongoose = require('mongoose');

const Schema = mongoose.Schema

const propertySchema = new Schema({

    project_name: {

        type: String,
        trim: true,
        required: [true, 'is required'],
    },


owner_info :{

    phone_number:String,
    email:String,
    land_mark:String,
    owner_locality:String,
    phone_number:String,
    address:String,
    service_charges:Number,
    keys:Number,
    key_relation:String,
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

        project_price:Number,
        price_unit:String,
     
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
        construction_status:String,
        build_effeciency:String,
        builtup_area:String,
        deposit:String,
        escalation:String,
        lock_in:String,
        notice_period:String,
        offered_area:String,
        power:String,
        property_age:String,
        property_facing:String,
        rent:String,
        rent_free_period:String,
        sale_type:String,
        site_area:String,

        total_floor:String,
        water:String,
       

   
    },

    property_type:{

        property_catagory:{type:String, default:'yes'},
        property_type_info:{type:String, default:'yes'},
        power_type:{type:String, default:'yes'},
        corner_type:{type:String, default:'yes'},
        client_catagory:{type:String, default:'yes'},
        Signage:{type:String, default:'yes'},
        vastu:{type:String, default:'yes'},


    },
    furnished_info: {
        
        furnished_status:String,
        discussion_room:Number,
        conference_room:Number,
        training_room:Number,
        board_room:Number,
        electrical_room:Number,
        server_room:Number,
        EPABX:String,
        project_head:String,
        airconditioning:String,
        pantry:String,
        date_of_furnishing:String

    },
 


    description:{
        type:String,
        default:null
        
    },

    property_gallery:{

        type:[String]
    }
   
 
}, { timestamps: true })



module.exports = mongoose.model('Property', propertySchema)