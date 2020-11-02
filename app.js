const { App } = require("@slack/bolt");
const express = require('express');
const mongoose = require('mongoose');
app = express();
app.use(express.urlencoded({extended: true}));
app.listen(8080, () => console.log("Express listening"));
require('dotenv').config();
const dbConnectString = `mongodb+srv://dino:${process.env.MONGO_PASSWORD}@cluster0.c4ci4.mongodb.net/schoolLibrary?retryWrites=true&w=majority`;

const bolt = new App({
    signingSecret: process.env.SLACK_SECRET,
    token: process.env.SLACK_TOKEN,
  });

  (async () => {
    // Start the app
    await bolt.start(3000);
  
    console.log('⚡️ Bolt app is running!');
  })();


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

//the slash commands from Slack
app.post('/showlibrary', async (req, res) => {

    const books = await Book.find();

    const blocks = [
        {
            type: "header",
            text: {
                type: "plain_text",
                text: "School Library"
            }
        }
    ];

    books.forEach(book => {
        blocks.push({
            type: "section", 
            text: {
                type: "mrkdwn",
                text: book.title
            }, 
            type: "section",
            text: {
                type: "mrkdwn",
                text: book.currentOwner
            }
        })
    })
    try {
        await bolt.client.chat.postMessage({
            token: process.env.SLACK_TOKEN,
            channel: req.body.channel_id,
            blocks: blocks
        })
        res.json();
    } catch (error) {
        console.log(error);
    }
})

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