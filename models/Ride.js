const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    distanceKm: {
        type: Number,
        required: true
    },
    topSpeedKmh: {
        type: Number
    },
    notes: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Ride', rideSchema);