const mongoose = require('mongoose');

const Schema = mongoose.Schema

const settingSchema = new Schema({

    property_type: {

        type: String,
        trim: true,
        required: [true, 'is required'],
    },
    property:{
        type:String,
        trim:true,
        required:[true,'is required']
    }


 
}, { timestamps: true })

module.exports = mongoose.model('Settting', settingSchema)