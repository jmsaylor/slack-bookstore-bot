require('dotenv').config();

//Slack API Bolt config & connect
const { App } = require("@slack/bolt");
const bolt = new App({
    signingSecret: process.env.SLACK_SECRET,
    token: process.env.SLACK_TOKEN,
    });
bolt.start(3000).then(() => console.log('⚡️ Bolt app is running!'))

//Express web server for incoming commands from Slack
const express = require('express');
app = express().use(express.urlencoded({extended: true}));
app.listen(8080, () => console.log("Express listening"));

// Mongo DB
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://dino:${process.env.MONGO_PASSWORD}@cluster0.c4ci4.mongodb.net/schoolLibrary?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(() => console.log("connected")).catch(err => console.log(err))

//Data model through mongoose    
const Book = require('./models/Book');

// The Commands
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
        res.json({message: "Inserted " + text});

    } catch (error) {
        console.error(error);
    }
})

const {makeLibrarySections} = require('./slackMessages/makeLibrarySections')

app.post('/showlibrary', async (req, res) => {
    try {
        const books = await Book.find();

        await bolt.client.chat.postMessage({
            token: process.env.SLACK_TOKEN,
            channel: req.body.channel_id,
            blocks: makeLibrarySections(books)
        })
        res.json();
    } catch (error) {
        console.log(error);
    }

});

app.post('/checkout', async (req, res) => {
    try {
        // const {user_id, value} = req.body;
        //actions is an array
        console.log(req.body.payload['actions'][0]);

        res.json();
    } catch (error) {
        console.error(error);
    }
})