const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));

//app.use(express.json())
app.use(express.static('public'));

app.set('view engine', 'ejs');

const topRouter = require('./routes/top');
const popularRouter = require('./routes/popular');
app.use('/top', topRouter);
app.use('/popular', popularRouter);

module.exports = app;
