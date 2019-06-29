const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/capacitacao-api-facul',{
    useNewUrlParser: true
});

app.use(express.json());

app.use('/', require('./routes'));

module.exports = app;