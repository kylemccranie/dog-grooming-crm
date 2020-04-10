const router = require('express').Router();
let User = require('../models/user.model');


//Add User Route
router.route('/add').post((req,res) => {
  const username = req.body.username;
  const firstname = req.body.firstname;
  const lastname  = req.body.lastname;
  const businessname = req.body.businessname;
  const password = req.body.password;

  const newUser = new User({
    username,
    firstname,
    lastname,
    businessname,
    password
  });

  newUser.save()
    .then(() => res.json("User added"))
    .catch(() => res.status(400).json('Error'));
});

module.exports = router;
