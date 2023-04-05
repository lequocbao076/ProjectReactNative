const express = require('express');
const bodyParser = require('body-parser');
const { Users, Products, Contacts } = require('./model');
const { json } = require('express');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();
app.listen(process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/login', (req, res) => {
    console.log(req.body)
    Users.find({ username: req.body.username, password: req.body.password }).exec((e, docs) => {
        if (docs.length === 1) {
            res.json({ 'login': true, tenUS: docs[0].username, mail: docs[0].email, gt: docs[0].gender, anh: docs[0].avatar });
        }
        else {
            res.json({ 'login': false });
        }
    })
})


app.get('/products', (req, res) => {
    Products.find({}).exec((e, docs) => {
        if (!e) {
            res.json(docs);
        }
    });
});

app.get('/detail-product/:id', (req, res) => {
    Products.findById(req.params.id).exec((e, doc) => {
        if (!e) {
            res.json(doc);
        }
    });
});




