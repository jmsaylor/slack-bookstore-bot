## Slack Bookstore Bot

## Overview

This Slack Bot allows users to add books that they are willing to loan to others in a database. And, other Slack community members are able to view them and request to borrow them all from within the Slack platform.

## Motivation

_Reading is valuable, but books can be expensive._ Sharing books (especially titles in niche topics with high prices) allows those with any budget to read more books. The Slack Bot that lives inside the conversations of existing communities is a convenient medium for users to also share their books.

## Tech/Framework

This project is built ontop of **NodeJS**. **Bolt** is a package for working with the Slack API. **Express** handles the incoming POST requests configured in Slack. **Mongoose** keeps the database of listed books available for sharing.

## Status

This project is in the first stages of development. There is currently an MVP with Slack _slash commands_ `/showlibary` and `/donatebook`. Another route is set up to receive POST requests for the interactive message elements.

The current development goals are to:

- Incorporate a book API to gather more information on titles.
- Provide a more robust checkout and transfer action using Slack modals and dynamically loaded options.

## Usage

From withing the Slack chat, slash commands are prepended with a `/`. You can [join](https://join.slack.com/t/garilovich/shared_invite/zt-inyo0lzm-odLLnOyDCSiGspe0NiiSAw) this Slack workspace to try it out or install it on your own to use the bot. The bot then proceeds to respond and interact in various ways.

## Screenshots

![UI Example](https://imgur.com/DjfXKl9.jpg)<br/>

## Code Examples

```javascript
app.post("/showlibrary", async (req, res) => {
  try {
    const books = await Book.find();

    await bolt.client.chat.postMessage({
      token: process.env.SLACK_TOKEN,
      channel: req.body.channel_id,
      blocks: makeLibrarySections(books),
    });
    res.json();
  } catch (error) {
    console.log(error);
  }
});
```

The Slack API constructs messages from _blocks_ <br/> You can look at the [Block Kit Docs](https://api.slack.com/block-kit/building) for more information.<br/>

```javascript
type: "section",
text: {
    type: "mrkdwn",
    text: book.currentOwner
    }
```

```javascript
type: "section",
text: {
    type: "mrkdwn",
    text: "Request transfer from current owner"
    },
accessory: {
    // can add a url for redirect after click
    type: "button",
    text: {
        type: "plain_text",
        text: "Checkout",
        emoji: true
        },
    value: book.title,
    action_id: "checkout" + (Math.floor(Math.random() * 100000)) //TODO: better id system
    }
```

## Installation

This app isn't ready for distribution so you'll have to manually install it and get your own keys for now.

Slack requires a public IP address to send POST requests to so it's useful to have a cloud instance where you can install this project. If not, you'll have to find a way to expose or _tunnel_ localhost.

[Register your bot](https://api.slack.com/apps) with Slack and get the required TOKEN and SECRET. A MongoDB PASSWORD is also required for this implementation. The project is set up to configure secrets using dotenv from a `.env`file.

## Contribution

Take a look at the [Slack API Docs](https://api.slack.com/) for the myriad of possibilities.

You can join this Slack workspace where tests are being run:
https://join.slack.com/t/garilovich/shared_invite/zt-inyo0lzm-odLLnOyDCSiGspe0NiiSAw

Feel free to contact me about this project and submit any pull requests.

Twitter, Discord, & Github: jmsaylor
Gmail: johnmsaylor@gmail.com
