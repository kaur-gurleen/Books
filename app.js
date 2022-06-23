const express = require('express');
require('dotenv').config();

const mongoose = require('mongoose');
const BooksRoute = require('./Routes/booksRoutes')

const app = express();

// Add your own mongoose connection string in .env file
mongoose.connect(process.env.dbURI,{useNewURLParser : true, useUnifiedTopology : true})
    .then(result => app.listen(3001))
    .catch(err => console.log(err));

app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}));

app.use('/',BooksRoute);

//404
app.use((req,res) => {
    res.send('<h1>Cannot Find Page</h1>');
})

