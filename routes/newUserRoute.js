const express = require('express')
const saveNewUser = require('../utils/saveNewUser')
const uuidv4 = require('uuid/v4')
const User = require('../schemas/User')
const bodyParser = require('body-parser')

const newUserRoute = express.Router();
newUserRoute.use(bodyParser.urlencoded({
  extended: true
}));

newUserRoute.post('/',  function (req, res) {
  let email = req.body.email
  let uuid = uuidv4()
  const user = new User({
    email: email,
    apikey: uuid
  })

  user.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: "Handling POST requests to /user",
      createdProduct: result
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });


  // User.create({email:email, apikey:uuid}, (user, err) => {
  //   if(user){
  //   res.status(201).json(user)
  //   }
  // })
})

module.exports = newUserRoute



