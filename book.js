//importing function operation in bookcontroller
const {Router} = require('express');
const { Book } = require('./Book.controller');



const bookRouter =Router();

//to create  new book in monoogse database
bookRouter.post('/',Book.createBook);

// to updte the bok information


bookRouter.patch('/:id',Book.updateBook);


module.exports={
    bookRouter
}; 