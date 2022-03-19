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
 * add data object | for ex: books api
 * {
 *  id: number
 *  name: string
 *  author: string
 * }
 */
let books = [
    {
        id:1,
        name:"human\'s life",
        author:"john doe",
    },
    {
        id:2,
        name:"animal\'s life",
        author:"barker hamed",
    },
    {
        id:3,
        name:"birds\'s life",
        author:"angela luba",
    }
];


/**
 * listen to port
 */
app.listen(port, () => {
    console.log(`books app listening at http://localhost: ${port}`);
});
