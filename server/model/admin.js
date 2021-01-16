const mongoose = require('mongoose');

const Schema = mongoose.Schema

const adminSchema = new Schema({

    admin_name: {

        type: String,
        trim: true,
        required: [true, 'is required'],
    },
    email:{
        type:String,
        trim:true,
        required:[true,'is required']
    },

    password:{

        type:String,
        required:true
    }
   
 
}, { timestamps: true })

module.exports = mongoose.model('User', adminSchema)