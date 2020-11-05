### Slack Bot Bookstore

## Motivation

_Reading is valuable, but books can be expensive._ Sharing books (especially those in niche topics) allows those with any budget to read more books. The Slack Bot that lives inside the existing conversations of existing communities is a convenient medium for users to also share their books.

## Tech/Framework

**Bolt** is a package for working with the Slack API. **Express** handles the incoming POST requests set up in Slack. **Mongoose** keeps the database of listed books available for sharing.

## Status

This project is in the first stages of development. /n There is currently an MVP with Slack _slash commands_ `/showlibary` and `/donatebook`. \n There is an additional route set up to receive POST requests for the interactive message elements.

The development goal is to gather more information via a book API, validate information, provide a more robust checkout and transfer action that utilizes Slack modal windows and dynamic options.

## Screenshots

![UI Example](https://imgur.com/DjfXKl9.jpg)
![POST from Slack](https://imgur.com/zp2Wq41.jpg)
![Block Message Format](https://imgur.com/V0jXDNd.jpg)

<!-- Format: ![Alt Text](url) -->

## Installation

## Contribution
