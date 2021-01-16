const mongoose = require('mongoose');

const Schema = mongoose.Schema

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
        required:[true, "image is required"]
    },

    designation:{
        type:String,
        required:true,
    },
    salary_date : {

        type:String,
        required:true
    },
    sallary:{
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
        required:true,
    },
    address:{
        type:String,
        required:[true,'is required']
        
    },

   
 
}, { timestamps: true })

module.exports = mongoose.model('Employee', employeeSchema)