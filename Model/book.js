const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
     BookName : {
        type : String,
        required : true
     },
     Author : {
        type : String,
        required : true
     }
} , {timestamps : true}); 

const Book = mongoose.model('Book' , bookSchema);

module.exports = Book;