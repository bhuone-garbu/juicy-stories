const User = require('../models/User')
const { secret } = require('../config/enviroment')
const jwt = require('jsonwebtoken')

function secureRoute(req,res,next) {
  // check for a valid token the and start text of the token 
  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')){
    return res.status(401).json({ message: 'Unauthorized password' })
  }
  // takes value from header and removes text in front of token 
  const token = req.headers.authorization.replace('Bearer ', '')
  
  // payload is a part of the token with a uniqe number for the user (1st part)
  jwt.verify(token, secret , (err ,payload) => {
    if (err) return res.status(401).json({ message: 'Unauthorized token' })

    User 
      .findById(payload.sub)
      .then(user => {
        if (!user) return res.status(401).json({ message: 'Unauthorized payload' })
        req.currentUser = user
        next()
      })
      .catch(() => res.status(401).json({ message: 'Unauthorized error' }))
  })

}
module.exports = secureRoute
