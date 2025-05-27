const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// In-memory data storage (use a database in production)
let dataStore = [];

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(cors());

// POST endpoint to receive data
app.post("/api/createConversationTranscript", (req, res) => {
  const data = req.body;
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({ error: "No data provided" });
  }
  dataStore.push(data);
  res.status(201).json({ message: "Data received", data });
});

// GET endpoint to display all data
app.get("/api/getConversation", (req, res) => {
  res.json(dataStore);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
