const express = require('express');
const router = express.Router();
const BikePart = require('../models/BikePart'); // Import your blueprint

// 1. POST ROUTE: Add a new bike part
router.post('/', async (req, res) => {
    try {
        // Grab the data sent from the user and create a new part
        const newPart = new BikePart(req.body); 
        // Save it securely to MongoDB Atlas
        const savedPart = await newPart.save(); 
        // Send back a success status and the saved data
        res.status(201).json(savedPart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 2. GET ROUTE: Fetch all bike parts
router.get('/', async (req, res) => {
    try {
        // Ask MongoDB to find every single part in the collection
        const parts = await BikePart.find(); 
        // Send them back to the user
        res.json(parts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;