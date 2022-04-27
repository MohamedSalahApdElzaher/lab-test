
const { Book } = require('../models/bookSchema');
const bookSchema = new Schema(
    {
        count: Number,
        name: String,
        author: String,
        price: Number,
    }
);
const createBook = async(req,res) => {
    try{
        const book = await Book.create(req.body);
        res.status(201).send(book);
    }
    catch(e){
        res.status(400).send(e);
    }
};

module.exports = {
    createBook,
    deleteBook,
    updateBook,

};

const deleteBook = async(req,res)=>{
    try{
        const bookId = req.params.id;
        const book = await Book.deleteOne({_id:bookId});
        res.status(200).send(e);
    }
    catch(e){

    res.status(400).send(e);
    }
};

