const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:ch3ckd1sk@capacitacao-api-facul-00dsw.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

app.use('/', require('./routes'));

module.exports = app;