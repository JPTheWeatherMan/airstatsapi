const user = require('../schemas/User');

const Authenticate = (req, res, next) => {
  if (!req.headers.apikey) {
    res.status(401).send({ message: 'no api key' });
  }
  if (req.headers.apikey) {
    apikey = req.headers.apikey;
    user.find({ apikey: apikey }, (err, user) => {
      if (err) return console.log(err);
      if (!user.length) {
        res.status(401).send({ message: 'API key not recognized' });
      } else if (user.length === 1) {
        next();
      } else {
        res.status(400).send({ message: 'Bad Request' });
      }
    });
  }
};

module.exports = Authenticate;
