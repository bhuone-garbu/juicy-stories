const router = require('express').Router()
const stories = require('../controllers/stories')
const auth = require('../controllers/auth')
const offer = require('../controllers/offers')
const users = require('../controllers/users')
const secureRoute = require('../lib/secureRoute')

// Handling getteing all stories
router.route('/stories')
  .get(stories.index)
  .post(secureRoute, stories.create)
  
// Handling getting one strory
router.route('/stories/:id')
  .get(stories.show)
  .delete(secureRoute,stories.deleteStory)
  .put(secureRoute, stories.edit)


// Handling register of user - /register
router.route('/register')
  .post(auth.register)

// Handling user login - /login
router.route('/login')
  .post(auth.login)


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


// Get the user detail 
router.route('/users/:id')
  .get(secureRoute, users.show)


module.exports = router