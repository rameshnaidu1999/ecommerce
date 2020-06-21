const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const path = require("path");

// Initialize App
const app = express();

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.use('/', require('./routes/index'));

const PORT = 5500;

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});