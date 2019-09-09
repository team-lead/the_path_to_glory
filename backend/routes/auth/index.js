const router = require("express").Router();
const {check} = require("express-validator");

const {signIn, signUp} = require("../../controllers/auth");

const validationSignIn = [
  check("email", "Email must be between 3 to 32 characters")
      .matches(/.+\@.+\..+/)
      .withMessage("Email must contain @")
      .isLength({
        min: 4,
        max: 32,
      }),
  check("password", "Password is required").not().isEmpty(),
  check("password")
      .isLength({min: 6})
      .withMessage("Password must content at least 6 characters")
      .matches(/\d/)
      .withMessage("Password must content a number")
];

router.post("/signin", validationSignIn, signIn);

const validationSignUp = [
  check("firstname", "First Name is required").not().isEmpty(),
  check("secondname", "Second Name is required").not().isEmpty(),
  check("email", "Email is required").not().isEmpty(),
  check("email", "Email must be between 3 to 32 characters")
      .matches(/.+\@.+\..+/)
      .withMessage("Email must contain @")
      .isLength({
        min: 4,
        max: 32,
      }),
  check("phone", "Phone is required").not().isEmpty(),
  check("gender", "Gender is required").not().isEmpty(),
  check("password", "Password is required").not().isEmpty(),
  check("password")
      .isLength({min: 6})
      .withMessage("Password must content at least 6 characters")
      .matches(/\d/)
      .withMessage("Password must content a number")
];

router.post("/signup", validationSignUp, signUp);

module.exports = router;
