const mongoose = require('mongoose');

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
);

module.exports = Book;