const { Book } = require('../models/user');
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
        res.status(201).send(user);
    }
    catch(e){
        res.status(400).send(e);
    }
};
const updateUser = async (req, res) => {
    try{
        const bookId = req.params.id;
        const book = await Book.findOne({_id:bookId});
        if (req.body.name){
            book.name = req.body.name;
        }
        if (req.body.count){
           book.count = req.body.count;
        }
        if (req.body.author){
            book.author = req.body.author;
        }
        if (req.body.price){
            book.price = req.body.price;
        }
        await book.save();
        res.status(200).send(book);
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