/**
 * add dependency
 */
const express = require('express');
const bodyparser = require('body-parser');

/**
 * use express | bodyparser | port used
 */
const app = express();
app.use(bodyparser.json());
const port = 3001;


/**
 * listen to port
 */
app.listen(port, () => {
    console.log(`books app listening at http://localhost: ${port}`);
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
