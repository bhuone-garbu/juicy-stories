const offer = require('../models/Offer')




// give an for offer - /offers
function create(req,res) {
  req.body.user = req.currentUser
  offer
    .create(req.body)
    .then(offer => res.status(201).json(offer))
    .catch(err => res.status(404).json(err))
}


// request an offer - /offers


module.exports  = {
  create
}