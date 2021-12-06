'use strict';

const express = require('express');
const bodyParser= require('body-parser')
const eventRoutes = require("./routes/eventRoutes");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', eventRoutes.routes);

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});