const User = require('../models/User')

function show(req, res){
  User
    .findById(req.params.id)
    .then(user => {
      if (!user) return res.status(404).json({ message: 'no user found' })
      res.status(200).json(user)
    })
    .catch(err => res.status(500).json(err))
}

module.exports = { show }