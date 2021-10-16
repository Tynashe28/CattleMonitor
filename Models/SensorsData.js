const mongoose = require('mongoose');

const SensorDataSchema = mongoose.Schema({
    lat: {
        type:Number,
        required:true
    },
    lng: {
        type:Number,
        required:true
    },

    temperature :{
        type:Number,
        required:true
    },
    pulse :{
        type:Number
    },
    date:{
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('cattleData',SensorDataSchema);
