const router = require('express').Router()
const stories = require('../controllers/stories')
const users = require('../controllers/auth')
const offer = require('../controllers/offers')
const secureRoute = require('../lib/secureRoute')

// Handling getteing all stories
router.route('/stories')
  .get(stories.index)
  .post(secureRoute, stories.create)
  
// Handling getting one strory
router.route('/stories/:id')
  .get(stories.show)
  .delete(stories.deleteStory)
  .put(secureRoute, stories.edit)


// Handling register of user - /register
router.route('/register')
  .post(users.register)

// Handling user login - /login
router.route('/login')
  .post(users.login)


// Handling create offer - /offers
router.route('/offers')
  .post(secureRoute, offer.create)
  .get(secureRoute,offer.index)


// Handling singel offer - /offers/:id 
router.route('/offers/:id')
  .get(offer.show)
  .put(secureRoute, offer.update)

// Handling Messages Being Posted
router.route('/offers/:id/messages')
  .post(secureRoute,offer.messagesCreate)

// Getting All Messages
router.route('/offers/:id/messages')
  .get(secureRoute, offer.allMessages)


module.exports = router