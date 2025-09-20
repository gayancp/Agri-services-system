// Import express
const express = require("express");

// Create express app
const app = express();


// Middleware parse JSON
app.use(express.json());

// route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
