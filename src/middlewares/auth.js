const { TOKEN_SECRET } = require('../config/config')["development"];
const jwt = require('jsonwebtoken');

const auth = function (req, res, next) {
  const token = req.cookies['auth_token'];

  if (!token) {
    return next();
  }

  jwt.verify(token, TOKEN_SECRET, (error, decodedToken) => {
    if (error) {
      return res.redirect('/login');
    }

    req.user = decodedToken;
    res.locals.user = decodedToken;
    next();
  });
}

module.exports = { auth };