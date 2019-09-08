const User = require("../models/User");
const { errorHandler } = require("../helpers/dbErrorHandler");
const jwt = require('jsonwebtoken'); // to generate signed jsonwebtoken
const expressJwt = require("express-jwt");
const config = require("config");

exports.checkAuth = expressJwt({
  secret: config.get("jwtSecret"),
  userProperty: "auth"
})

decodedID = (req, res) => {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    const token = bearerToken;
    var decoded = jwt.decode(token, { complete: true });
    console.log(decoded.header);
    console.log(decoded.payload)
    return decoded.payload.user.id
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

exports.profile = (req, res) => {
  // find the user based on id
  const _id = decodedID(req, res);
  User.findOne({ _id }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "User with that id does not exist"
      });
    }
    const { phone, firstName, secondName, birthday, email } = user;

    res.json({ phone, firstName, secondName, birthday, email })

  });
};

exports.updateUser = (req, res) => {
   // find the user based on id
   const user = new User(req.body);
   const id = decodedID(req, res);
 
  user.updateOne({ _id: id}, (err, user) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    };
    // user.salt = undefined;
    // user.hashed_password = undefined;
    return res.status(200).json({ user });
  })
};