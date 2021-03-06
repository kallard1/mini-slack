const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) return res.status(401).json({ msg: 'No token, authorisation denied' });

  try {
    req.user = jwt.verify(token, process.env.JWT_TOKEN);
    next();
  } catch (e) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
}

module.exports = auth;
