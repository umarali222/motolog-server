const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); 

// --- ADD THESE TWO LINES ---
const partRoutes = require('./routes/bikeParts');
app.use('/api/parts', partRoutes);
// ---------------------------

// Test Route
app.get('/api/status', (req, res) => {
    res.json({ message: "MotoLog API is running!" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});