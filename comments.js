// Create web server application with Node.js and Express.js

// Import express module
const express = require('express');

// Import body-parser module
const bodyParser = require('body-parser');

// Import path module

const path = require('path');




// Create express application
const app = express();

// Set view engine to ejs
app.set('view engine', 'ejs');

// Set views folder
app.set('views', path.join(__dirname, 'views'));

// Set static folder


app.use(express.static(path.join(__dirname, 'public')));

// Use body-parser middleware

app.use(bodyParser.urlencoded({ extended: false }));





// Create comments array
const comments = [

    { name: 'John', comment: 'Hello there!' },

    { name: 'Mary', comment: 'How are you?' },


];

// Create home route
app.get('/', (req, res) => {
    
        res.render('home', { comments: comments });
    
    }

);

// Create comment route


app.get('/comment', (req, res) => {
    
        res.render('comment');
    
    }

);








