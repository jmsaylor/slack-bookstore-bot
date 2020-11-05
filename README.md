### Slack Bot Bookstore

## Motivation

_Reading is valuable, but books can be expensive._ Sharing books (especially those in niche topics) allows those with any budget to read more books. The Slack Bot that lives inside the existing conversations of existing communities is a convenient medium for users to also share their books.

## Tech/Framework

This project is built ontop of **NodeJS**. **Bolt** is a package for working with the Slack API. **Express** handles the incoming POST requests configured in Slack. **Mongoose** keeps the database of listed books available for sharing.

## Status

This project is in the first stages of development. There is currently an MVP with Slack _slash commands_ `/showlibary` and `/donatebook`. Another route is set up to receive POST requests for the interactive message elements.

The current development goal is use a book API to gather more information on titles, validate information, and provide a more robust checkout and transfer action that utilizes Slack modal windows and dynamic options.

## Screenshots

Slack _slash commands_ are entered right into the chat and are just one way into the Bookstore App. Take a look at the [Slack API Docs](https://api.slack.com/) for the myriad of possibilities.\  
![UI Example](https://imgur.com/DjfXKl9.jpg)
The "Bookstore Bot", that is the collection of POST requests we have set up in Slack and are processing on our end. This is one example.
![POST from Slack](https://imgur.com/zp2Wq41.jpg)
The Slack API constructs messages from _blocks_ which is an array of objects with a certain type. You can look at the [Block Kit Docs](https://api.slack.com/block-kit/building) here.
![Block Message Format](https://imgur.com/V0jXDNd.jpg)
There are a large variety of block types that can be used to create very rich message responses. Additionally, the [interactive endpoint](https://api.slack.com/interactivity/handling) can be expanded to create more complex work-flows and really develop a useful bot in Slack.

## Installation

This app isn't ready for distribution so you'll have to manually install it for now.

Slack requires a public IP address to send POST requests to so it's useful to have a cloud instance where you can install this project. If not, you'll have to find a way to expose or _tunnel_ localhost.

[Register your bot](https://api.slack.com/apps) with Slack and get the required TOKEN and SECRET. A MongoDB PASSWORD is also required for this implementation. The project is set up to configure from a `.env`file.

## Contribution

If you'd like to help develop the Slack Bookstore Bot, then please send me a message.

Always open to pull requests that will make this a useful tool for sharing books.

Twitter, Discord, & Github: jmsaylor
Gmail: johnmsaylor@gmail.com
