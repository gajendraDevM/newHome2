const mongoose = require('mongoose');

const Schema = mongoose.Schema

let date = new Date()
const sallarySchema = new Schema({

    sallary_ammount: {
        type:String,
        default:'0'
    },
    date: {
        type:Date,
        default:date,
    }
}, { timestamps: true })

module.exports = mongoose.model('Sallary', sallarySchema)
const employeeSchema = new Schema({

    employee_name: {

        type: String,
        trim: true,
        required: [true, 'is required'],
    },
    employee_id:{

        type:String,
        required:true
    },
    image: {

        type:String,
    },

    salary:String,
    salary_info:[sallarySchema],

    designation:{
        type:String,
        required:true,
    },
    salary_date : {

        type:String,
        required:true
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

    image_id:{
        type:String,
     
    },
    address:{
        type:String,
        required:[true,'is required']
        
    },

   
 
}, { timestamps: true })

module.exports = mongoose.model('Employee', employeeSchema)