# lab-test
**This is a simple course project  to get hands on how to use Nodejs , build Express API , connect to mongoDB  and finally dealing with Docker**
## We are responsible for 
1. Create some end points deals with array of objects
2. Replace array of objects with database and connect to mongoDB database
3. Create more  end points
4. Create an Docker Image and Push it to dockerHub

## my code snip
```
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
```
## output
![result](https://user-images.githubusercontent.com/47748059/165385743-f5217d58-66c6-4707-8aed-2c35e2b71c3a.PNG)

```
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
```
## output
![1](https://user-images.githubusercontent.com/47748059/165385874-a2dfd5cc-5ebe-4da5-b781-79739fdefd3c.PNG)

```
/**
*  get book with max price from database
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
```
## output
![2](https://user-images.githubusercontent.com/47748059/165386154-8ebf3aa0-01a5-4a42-93bf-d876800cce14.PNG)

```
/**
*  delete book from database
*/
app.delete('/delete/:_id',async (req,res)=>{
    const is_valid = mongoose.isValidObjectId(req.params._id);
    if(is_valid)
    {
        Book.remove({_id:req.params._id})
        .then((result) => {
            res.send('data removed successfully');
        })
        .catch((err) => { console.log(err) });
    }else
    {
        res.send({
            msg:"invalid id please enter valid id"
        });
    }
});
```
## output before delete
![10](https://user-images.githubusercontent.com/47748059/165483928-cea7467f-316a-42b4-a1c6-a0f335be156c.PNG)
## output after delete
![12](https://user-images.githubusercontent.com/47748059/165484017-e238c981-38c8-4dac-bc75-52a33918b00d.PNG)
![13](https://user-images.githubusercontent.com/47748059/165484042-e612938a-de62-49e1-bbb6-f8fa673a5f95.PNG)


