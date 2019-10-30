const Offer = require('../models/Offer')

function index(req, res) {
  // console.log(req.query)
  // query put in here for making broader requests to the MongoDB
  Offer
    .find(req.query)
    .populate('story')
    .populate('seller')
    .populate('buyer')
    .then(offer => res.status(200).json(offer))
    .catch(err => res.status(500).json(err))
}

// create an offer - /offers
function create(req, res) {
  Offer
    .create(req.body)
    .then(offer => res.status(201).json(offer))
    .catch(err => {
      if (err.name === 'ValidationError') {
        res.status(422).json(err)
      } else {
        res.status(500).json(err)
      }
    })
}


// making request for one offer -/offers/:id
function show(req, res) {
  Offer
    .findById(req.params.id)
    .then(offer => {
      if (!offer) return res.status(404).json({ message: 'no offer ' })
      res.status(200).json(offer)
    })
    .catch(err => res.status(500).json(err))
}


// update an offer /offers/:id
function update(req, res) {
  Offer.findById(req.params.id)
    .then(offer => {
      if (!offer) return res.status(404).json({ message: 'no story' })
      offer.set(req.body)
      offer.save()
      return res.status(202).json(offer)
    })
    .catch(err => {
      if (err.name === 'ValidationError') {
        res.status(422).json(err)
      } else {
        res.status(500).json(err)
      }
    })
}

// Create Messages nn Offer - /offers/:id/messages
function messagesCreate(req, res) {
  Offer.findById(req.params.id)
    .then(offer => {
      if (!offer) res.status(404).json({ error: 'Offer Not Found' })
      offer.message.push(req.body)
      return offer.save()
    })
    .then(messages => res.status(201).json(messages))
    .catch(err => {
      if (err.name === 'ValidationError') {
        res.status(422).json(err)
      } else {
        res.status(500).json(err)
      }
    })
}

// Show all Messages - /offers/:id/messages
function allMessages(req, res) {
  Offer.findById(req.params.id) 
    .then(offer => {
      if (!offer) return res.status(404).json({ message: 'no offers' })
      console.log(offer.message)
      res.status(200).json(offer.message)
    })
    .catch(err => res.status(500).json(err))
}


module.exports = {
  index,
  create,
  show,
  update,
  messagesCreate,
  allMessages
}