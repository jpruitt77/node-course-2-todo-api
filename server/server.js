var express = require('express');
var bodyParser = require('body-parser');

var {User} = require('./models/user');
var {Todo} = require('./models/todo');
var {mongoose} = require('./db/mongoose');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});