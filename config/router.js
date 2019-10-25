const router = require('express').Router()
const stories = require('../controllers/stories')


// getteing all stories
router.route('/stories')
  .get(stories.index)
  .post(stories.create)
  
// getting one strory
router.route('/stories/:id')
  .get(stories.show)
  .delete(stories.deleteStory)
  .put(stories.edit)


module.exports = router