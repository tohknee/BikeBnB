const express = require("express");
const bcrypt = require("bcryptjs");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");

//importcheck function and handleValidationError function
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

//create a middleware that will check username,email,password keys and validate them
//if any checks fail an error will be returned as the response
const validateSignup = [
  check("firstName")
    .exists({ checkFalsy: true })
    .withMessage("Provide first name"),
  check("lastName")
    .exists({ checkFalsy: true })
    .withMessage("Provide last name"),
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];
// Sign up
router.post("/", validateSignup, async (req, res) => {
  //add validateSignup callback to existing signup post
  const { firstName, lastName, email, password, username } = req.body; //pass in firstname,lastname
  const hashedPassword = bcrypt.hashSync(password);
  const user = await User.create({
    firstName,
    lastName,
    email,
    username,
    hashedPassword,
  }); //create with these attributes

  //define object safeUser
  const safeUser = {
    id: user.id,
    firstName: firstName,
    lastName: lastName,
    email: user.email,
    username: user.username,
  };

  await setTokenCookie(res, safeUser);

  return res.json({
    user: safeUser,
  });
});

module.exports = router;
