const { User } = require('../models/user');
const bookSchema = new Schema(
    {
        count: Number,
        name: String,
        author: String,
        price: Number,
    }
);
const createUser = async(req,res) => {
    try{
        const user = await User.create(req.body);
        res.status(201).send(user);
    }
    catch(e){
        res.status(400).send(e);
    }
};
const updateUser = async (req, res) => {
    try{
        const bookId = req.params.id;
        const user = await User.findOne({_id:bookId});
        if (req.body.name){
            user.name = req.body.name;
        }
        if (req.body.count){
            user.count = req.body.count;
        }
        if (req.body.author){
            user.author = req.body.author;
        }
        if (req.body.price){
            user.price = req.body.price;
        }
        await user.save();
        res.status(200).send(user);
    } 
    catch(e){
        res.status(400).send(e);
    }
    
 };
module.exports = {createUser,};