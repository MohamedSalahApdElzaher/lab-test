//importing function operation in bookcontroller
const {Router} = require('express');
const { Book } = require('./Book.controller');



const bookRouter =Router();

//to create  new book in monoogse database
bookRouter.post('/',Book.createBook);

//to delete  book in monoogse database
bookRouter.delete('/:id' ,Book.deleteBook);


bookRouter.patch('/:id',Book.updateBook);


module.exports={
    bookRouter
}; 
