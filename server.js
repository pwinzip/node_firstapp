const express = require('express');
const users = require('./db.json');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/api/users', (req,res) => {
    res.json(users);
});

app.get('/api/users/:id', (req,res) => {
    res.json(users.find(user => user.id === Number(req.params.id)));
});


app.post('/api/users', (req,res) => {
    users.push(req.body);
    let json = req.body;
    console.log(json);
    res.send("Username: " + json.username + " inserted.");
});






app.get("/", (req, res) => {
    res.send("Hello! from Node.js");
});

app.get("/ping", (req, res) => {
    res.send("Hello! My name is Naphat.");
});


app.listen(port, () => {
    console.log("Starting node.js at http://127.0.0.1:" + port);
    console.log("Starting node.js at http://127.0.0.1:" + port + '/api/users');
});