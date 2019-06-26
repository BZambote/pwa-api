const express = require('express');
const routes = express.Router();
const tasksController = require('../controllers/tasks.controller');


routes.get('/', tasksController.get);
routes.post('/', tasksController.create);
routes.put('/', tasksController.update);
routes.delete('/', tasksController.remove);

module.exports = routes;
