const express = require('express')
const saveNewUser = require('../utils/saveNewUser')
const bodyParser = require('body-parser')

const newUserRoute = express.Router();
newUserRoute.use(bodyParser.urlencoded({
  extended: true
}));

newUserRoute.post('/', function (req, res) {
  const savedUser = saveNewUser(req.body.email)
  res.status(201).send(savedUser)
})

module.exports = newUserRoute



