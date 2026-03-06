const mongoose = require('mongoose');

const bikePartSchema = new mongoose.Schema({
    partName: {
        type: String,
        required: true,
        trim: true
    },
    installDate: {
        type: Date,
        default: Date.now
    },
    lifespanKm: {
        type: Number,
        required: true // e.g., A brake pad might last 15,000 km
    },
    currentWearKm: {
        type: Number,
        default: 0 // Starts at 0 km when installed
    },
    status: {
        type: String,
        default: 'Optimal' // Can change to 'Needs Replacement' later
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt dates
});

module.exports = mongoose.model('BikePart', bikePartSchema);