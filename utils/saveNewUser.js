const uuidv4 = require('uuid/v4')
const User = require('../schemas/User')

function saveNewUser(email){
  let uuid = uuidv4()
  User.create({email: email, apikey: uuid})
  return {email: email, apikey:uuid}
}

module.exports = saveNewUser