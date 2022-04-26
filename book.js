//importing function operation in bookcontroller
const {Router} = require('express');
const { Book } = require('./Book.controller');



const bookRouter =Router();


bookRouter.post('/',Book.createBook);

bookRouter.delete('/:id' ,Book.deleteBook);

bookRouter.patch('/:id',Book.updateBook);



module.exports={
    bookRouter
}; 
