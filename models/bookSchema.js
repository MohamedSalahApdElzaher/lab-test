const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * schema structure
 * {
 *  count: number
 *  name: string
 *  author: string
 *  price: number
 * }
 */
const bookSchema = new Schema(
    {
        count: Number,
        name: String,
        author: String,
        price: Number,
    }
);

/**
 * model based on schema
 */
const Book = mongoose.model("Book", bookSchema);

// export the model
module.exports = Book;