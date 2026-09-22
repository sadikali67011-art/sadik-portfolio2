const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/portfolio")
  .then(() => console.log("✅ MongoDB Connected successfully"))
  .catch(err => console.log("❌ MongoDB Connection Error: ", err));

// Mongoose Schema & Model
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Routes
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }

  try {
    // Save to Database
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    console.log(`✅ Saved new message from ${name} to Database.`);
    res.status(200).json({ success: true, message: 'Your message has been saved successfully!' });
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ error: 'Failed to save message to database.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server is running on http://localhost:${PORT}`);
});
