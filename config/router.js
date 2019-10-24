const router = require('express').Router()
const stories = require('../controllers/stories')


// getteing all stories
router.route('/stories')
  .get(stories.index)

router.route('/stories/:id')
  .get(stories.show)
// getting one strory


module.exports = router