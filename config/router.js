const router = require('express').Router()
const stories = require('../controllers/stories')
const users = require('../controllers/auth')
const offer = require('../controllers/offers')

// Handling getteing all stories
router.route('/stories')
  .get(stories.index)
  .post(stories.create)
  
// Handling getting one strory
router.route('/stories/:id')
  .get(stories.show)
  .delete(stories.deleteStory)
  .put(stories.edit)


// Handling register of user - /register
router.route('/register')
  .post(users.register)

// Handling user login - /login
router.route('/login')
  .post(users.login)


// Handling create offer - /offer
router.route('/offers')
  .post(offer.create)

module.exports = router