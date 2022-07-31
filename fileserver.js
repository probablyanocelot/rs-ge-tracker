const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

let app = express();
let PORT = 3000;

let categories = [];

app.use(cors())

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res, next) {
    var options = {
        root: path.join(__dirname)
    };
     
    var fileName = '0.json';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
            next();
        }
    })
});

app.get('/categories', (req, res) => {
    res.json(categories);
});

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log(`app listening on port ${PORT}!`);
});