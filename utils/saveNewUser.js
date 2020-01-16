const uuidv4 = require('uuid/v4')
const User = require('../schemas/User')

function saveNewUser(email){
  let uuid = uuidv4()
  console.log('i am running')
  User.create({email: email, apikey: uuid})
}

module.exports = saveNewUser