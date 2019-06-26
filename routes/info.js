const express = require('express');
const routes = express.Router();
const infoController = require('../controllers/info.controller');


routes.get('/', infoController.get);

module.exports = routes;
