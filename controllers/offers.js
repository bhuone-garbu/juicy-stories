const Offer = require('../models/Offer')


function index(req, res) {
  // console.log(req.query)
  // query put in here for making broader requests to the MongoDB
  Offer
    .find(req.query)
    .then(offer => res.status(200).json(offer))
    .catch(err => res.status(404).json(err))
}

// give an for offer - /offers
function create(req,res) {
  Offer
    .create(req.body)
    .then(offer => res.status(201).json(offer))
    .catch(err => res.status(404).json(err))
}


// making request for one offer -/offers/Id
function show(req, res) {
  Offer
    .findById(req.params.id)
    .then(offer => {
      if (!offer) return res.status(404).json({ message: 'no offer ' })
      res.status(200).json(offer)
    })
    .catch(err => res.status(404).json(err))
}


// update an offer /offers/id
function update(req, res) {
  Offer.findById(req.params.id)
    .then(offer => {
      if (!offer) return res.status(404).json({ message: 'no story' })
      offer.set(req.body)
      offer.save()
      return res.status(202).json(offer)
    })
    .catch(err => res.status(404).json(err))
}



module.exports  = {
  index,
  create,
  show,
  update
}