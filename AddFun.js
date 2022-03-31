/**
 * post route | add new book
 */
 app.post("/add", (req, res) => {
    const id = Date.now();
    books.push({ ...req.body, id });
    res.send({ ...req.body, id });
 });
