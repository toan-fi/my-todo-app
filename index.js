const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define routes
app.get('/', (req, res) => {
  // Render index.ejs template
  res.render('index');
});

app.post('/add', (req, res) => {
  // Handle new Todo item submission
  // ... (Implement logic to add item to data store)
  // Redirect back to main page
  res.redirect('/');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
