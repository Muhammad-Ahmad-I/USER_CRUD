const express = require('express');
const {
  getAllTask,
  addNewTask,
  getSingleUser,
  taskUpdate,
  deleteTask,
} = require('../controller/TaskController.js');

const Route = express.Router();

Route.get('/', getAllTask);
Route.post('/addTask', addNewTask);
Route.get('/task/:id', getSingleUser);
Route.put('/taskUpdate/', taskUpdate);
Route.delete('/task/:id', deleteTask);
module.exports = Route;
