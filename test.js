const {makeLibrarySections} = require('./slackMessages/makeLibrarySections')
let books = [
    {
    title: "Clean Code",
    currentOwner: "Joe"
    },
    {
        title: "Basic Java",
        currentOwner: "Bill"

    }

]

console.log(
    makeLibrarySections(books));