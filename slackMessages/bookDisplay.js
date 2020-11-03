const makeBookSections = (book) => {
    const tempContainer = [];

    tempContainer.push({
        type: "header"
    })

    tempContainer.push({
        type: "section", 
        text: {
            type: "mrkdwn",
            text: book.title
        },
        accessory: {
            type: "image",
            image_url: "https://images-na.ssl-images-amazon.com/images/I/41-+g1a2Y1L._SX375_BO1,204,203,200_.jpg",
            alt_text: "Photo of Book Cover"
        }
    });
    tempContainer.push({
        type: "section",
        text: {
            type: "mrkdwn",
            text: book.currentOwner
        }
    });

    tempContainer.push({
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
            action_id: "checkout" + (Math.floor(Math.random() * 1000)) //TODO: better id system
        }
    });

    return tempContainer;
}

exports.makeBookSections = makeBookSections;