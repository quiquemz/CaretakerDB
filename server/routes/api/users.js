const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");
const RegistrationKey = require("../../models/RegistrationKey");

// @route POST api/users/register
// @desc Register user
// @access Public
// 
// *******************************************************************************************************
// KEYS ADDED TEMPORARILY TO PREVENT SIGNUPS ON CARETAKERDB. CURRENTLY ONLY CREATING ACCOUNTS FOR TEST USERS.
// *******************************************************************************************************
// 
router.post("/register/", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email.toLowerCase();
  User.findOne({ email: email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      RegistrationKey.findOneAndDelete({key: req.body.regKey}).then(key => {
        if (key) {
          const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            companyName: req.body.companyName,
            email: email,
            password: req.body.password,
            membership: req.body.membership
          });
      // Hash password before saving in database
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            });
          });
        } else {
          return res.status(400).json({ regKey: "No registration key found" });
        }
      });
    }
  });
});

  // @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email.toLowerCase();
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ email: "Email not found" });
    }
// Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          companyName: user.companyName,
          membership: user.membership,
          date: user.date,
        };
// Sign token
        jwt.sign(
          payload,
          process.env.SECRET || require('../../../config/keys').secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ email: "Username or password is incorrect", password: "Username or password is incorrect" });
      }
    });
  });
});

module.exports = router;