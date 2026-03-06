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

// UPDATE a specific motorcycle part by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedPart = await BikePart.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true } // This tells the database to send back the newly updated part, not the old one
    );
    
    if (!updatedPart) {
      return res.status(404).json({ message: "Motorcycle part not found!" });
    }
    res.status(200).json(updatedPart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE a specific motorcycle part by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedPart = await BikePart.findByIdAndDelete(req.params.id);
    
    if (!deletedPart) {
      return res.status(404).json({ message: "Motorcycle part not found!" });
    }
    res.status(200).json({ message: "Part successfully deleted from your motolog!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});