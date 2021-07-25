const mongoose = require('mongoose');

const Schema = mongoose.Schema

const localitySchema = new Schema({



    locality:{
        type:String,
        trim:true,
        required:[true,'is required'],
        unique:true

    }


 
}, { timestamps: true })

module.exports = mongoose.model('Locality', localitySchema)