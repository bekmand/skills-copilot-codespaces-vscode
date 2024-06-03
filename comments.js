// Create web server
// Create a RESTful API to interact with the comments
// Use Express.js
// Use body-parser to parse the request body
// Use Mongoose to interact with the database

// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create a new Express.js web server
const app = express();

// Use body-parser to parse the request body
app.use(bodyParser.json());

// Connect to the MongoDB database using Mongoose
mongoose.connect('mongodb://localhost/comments');

// Define the Comment model
const Comment = mongoose.model('Comment', {
    username: String,
    text: String
});

// Define the RESTful API routes
// GET /comments - Read all comments
app.get('/comments', (req, res) => {
    Comment.find((err, comments) => {
        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }
        res.json(comments);
    });
});

// POST /comments - Create a new comment
app.post('/comments', (req, res) => {
    const comment = new Comment(req.body);
    comment.save((err, comment) => {
        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }
        res.status(201).json(comment);
    });
});

// Start the web server
app.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000');
});

// Path: server.js
// Create a web server
// Serve static files
// Create a RESTful API to interact with the comments
// Use Express.js
// Use body-parser to parse the request body
// Use Mongoose to interact with the database

// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create a new Express.js web server
const app = express();

// Use body-parser to parse the request body
app.use(bodyParser.json());

// Connect to the MongoDB database using Mongoose
mongoose.connect('mongodb://localhost/comments');

// Define the Comment model
const Comment = mongoose.model('Comment', {
    username: String,
    text: String
});

// Serve static files from the public directory
app.use(express.static('public'));

// Define the RESTful API routes
// GET