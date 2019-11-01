const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

// register route for user - /register
function register(req, res) {
  User
    .create(req.body)
    .then(user => res.status(201).json({ message: `Thanks for registering ${user.firstName}` }))
    .catch(err => res.status(422).json(err))
}


// login route for user - /login
function login(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user || !user.isPasswordValid(req.body.password)) {
        // console.log(req.body.password)
        return res.status(401).json(({ message: 'Unauthorized' }))
      }
      const token = jwt.sign({ sub: user._id },secret, { expiresIn: '12h' })
      res.status(202).json({ message: `Welcome Back ${user.firstName}`, token })
    })
    .catch(err => res.status(422).json(err))
}

module.exports = {
  register,
  login
}