const express = require('express');
const mongoose = require('mongoose');
app = express();
app.use(express.urlencoded({extended: true}));
app.listen(8080, () => console.log("Express listening"));
require('dotenv').config();
const dbConnectString = `mongodb+srv://dino:${process.env.MONGO_PASSWORD}@cluster0.c4ci4.mongodb.net/schoolLibrary?retryWrites=true&w=majority`;

mongoose.connect(dbConnectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("connected")).catch(err => console.log(err))

//all the boring config stuff is done - on to the data model

const Book = mongoose.model(
    "books",
    new mongoose.Schema({
        title: String,
        donatedBy: String,
        donatedOn: {
            type: Date,
            default: Date.now()
        },
        currentOwner: String
    })
)

//this is the webhook we're listening for that is that crux of the action

app.post('/donatebook', async (req, res) => {
    try {
        const {text, user_name} = await req.body; //user_id is also available
        const book = new Book({
            title: text,
            donatedBy: user_name,
            currentOwner: user_name
        })
    
        await book.save();
        console.log("entry:" + text);
        res.json({message: "Yep"});
        
    } catch (error) {
        console.error(error);
    }
})