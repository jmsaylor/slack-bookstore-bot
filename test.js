const {makeBookSections} = require("./slackMessages/bookDisplay")
let book = {
    title: "hello",
    currentOwner: "Joe"
}

console.log(makeBookSections(book));