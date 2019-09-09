const User = require("../models/User");
const {validationResult} = require("express-validator");

exports.signIn = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  };
  
};

exports.signUp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  };

  const {email} = req.body;
  try {
    const find = await User.findOne({email});
    if (find) {
      return res.status(400).json({error: "User already exist"});
    } else {
      const newUser = await new User(req.body);
      await newUser.save();
      return res.status(200).json({msg: "Success"})
    }
  } catch (error) {
    
  }
};
