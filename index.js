const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create();

const conn = require('./db/conn');

app.engine("handlebars", hbs.engine);
app.set('view engine', 'handlebars');

app.use( express.urlencoded( { extended: true } ))

app.use(express.json());

app.use(express.static('public'));

app.listen(3000);