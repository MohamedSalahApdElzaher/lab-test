/**
 * get route | get book by id
 */

app.get("/book/:id", (req, res) => {
    const book = books.find((b) => b.id === parseInt(req.params.id));
    book ? res.send(book) : res.status(404).send({ error: "NOTFOUND" });
 });
