/**
 *  add dependency express | body-parser
 */
const express = require('express');
const bodyparser = require('body-parser');

/**
 *  use express | bodyparser | port used
 */
const app = express();
app.use(bodyparser.json());
const port = 3001;


// for post request
app.use(express.urlencoded({ extended: true }));

/**
 *  mongoose | connect to database
 */
const mongoose = require('mongoose');
const Book = require('./models/bookSchema');
const url = "mongodb+srv://test:test@cluster0.r5v76.mongodb.net/all_data?retryWrites=true&w=majority";
mongoose.connect(url)
    .then((result) => {
        app.listen(port, () => {
            console.log(`books app listening at http://localhost: ${port}`);
        });
    }).catch((err) => console.log(err));


// home
app.get("/", (req, res) => {
    res.redirect('/bookslist');
});

/**
 *  list all books from database
 */
app.get("/bookslist", (req, res) => {
    Book.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => { console.log(err) });
});


/**
*  get book with max price 
*/
app.get("/bookmax", (req, res) => {
    Book.find()
        .then((result) => {
            var n = result.length;
            max = result[n - 1].price;
            while (n--) {
                if (result[n].price > max) {
                    max = result[n].price
                }
            }
            const book = result.find((b) => b.price === parseInt(max));
            book ? res.send(book) : res.status(404).send({ error: "NOTFOUND" });
        })
        .catch((err) => { console.log(err) });
});

















/**
 * get route | get book by id
 */

app.get("/book/:id", (req, res) => {
    const book = books.find((b) => b.id === parseInt(req.params.id));
    book ? res.send(book) : res.status(404).send({ error: "NOTFOUND" });
});

/**
 * post route | add new book
 */
app.post("/add", (req, res) => {
    const id = Date.now();
    books.push({ ...req.body, id });
    res.send({ ...req.body, id });
});


/**
* delete route | delete book
*/
app.delete("/delete/:id", (req, res) => {
    books = books.filter((b) => b.id !== parseInt(req.params.id));
    res.send({ message: "Success" });
});


/**
* put route | update book by id
*/
app.put('/update/:id', (req, res) => {
    const bookIndex = books.findIndex(
        (b) => b.id === parseInt(req.params.id)
    );
    if (bookIndex != -1) {
        books[bookIndex] = {
            ...books[bookIndex],
            ...req.body,
        };
        res.send(books[bookIndex]);
    } else {
        res.status(404).send({ error: "NOTFOUND" });
    }
});
