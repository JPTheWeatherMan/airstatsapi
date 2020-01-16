const express = require('express')
const saveNewUser = require('../utils/saveNewUser')
const bodyParser = require('body-parser')

const newUserRoute = express.Router();
newUserRoute.use(bodyParser.urlencoded({
  extended: true
}));

newUserRoute.post('/user', function (req, res) {
	console.log(req.body)
  saveNewUser(req.body.email)
  res.send('new user made')
})

module.exports = newUserRoute



