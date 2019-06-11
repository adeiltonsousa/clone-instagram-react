const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://cloneinstagram:cloneinstagram@cluster0-4xk4c.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.get('/',(req, res) => {
    return res.send(`Olsssá, ${req.query.name}`);
});

app.listen(3333);

