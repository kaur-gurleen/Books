const express = require('express');
//const Blog = require('../../BLOG/Models/blog');
const router = express.Router();
const Book = require('../Model/book.js')

router.get('/',(req,res) => {
    res.render('index');
});

router.get('/about',(req,res) => {
    res.render('about');
});

router.get('/add-new',(req,res) => {
    res.render('add');
});

router.get('/books',(req,res) => {
    Book.find().sort({createdAt : -1})
        .then(result =>{
            res.render('books',{Books: result})
        })
        .catch(err => console.log(err))
})

router.post('/books',(req,res) => {
    const book = new Book(req.body);
    book.save()
        .then(result => res.redirect('/books'))
        .catch(err => console.log('err'))
})

router.get('/:id',(req,res) => {
    const id = req.params.id;
    Book.findById(id)
        .then(result => {
            res.render('details',{book:result})
        })
        .catch(err => console.log(err));
});

router.delete('/:id',(req,res)=> {
    const id = req.params.id;
    Book.findByIdAndDelete(id)
        .then(result => {
            res.json({redirect : '/books'})
        })
        .catch(err => console.log(err));
})


module.exports = router;