const express = require('express');
app = express();

app.use(express.urlencoded({extended: true}));

const port = 3000;

app.listen(port);

app.post('/donatebook', (req, res) => {
    const book = req.body.book;
    console.log(book);
    res.send(book);
})