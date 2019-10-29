const Story = require('../models/Story')

function index(req, res) {
  // console.log(req.query)
  // query put in here for making broader requests to the MongoDB
  Story
    .find(req.query)
    .then(stories => res.status(200).json(stories))
    .catch(err => res.status(505).json(err))
}

// making request for one story -/story/Id
function show(req, res) {
  Story
    .findById(req.params.id)
    .then(story => {
      if (!story) return res.status(404).json({ message: 'no story ' })
      res.status(200).json(story)
    })
    .catch(err => res.status(500).json(err))
}

// create a story - /story
function create(req, res) {
  req.body.postedBy = req.currentUser
  // console.log('create')
  Story
    .create(req.body)
    .then(story => res.status(201).json(story))
    .catch(err => res.status(400).json(err))
}


// delete a story - /story/Id
function deleteStory(req, res) {
  
  // console.log('delete')
  // console.log('ID', req.params.id)

  Story.findById(req.params.id)
    .then(story => {
      if (!story) {
        return res.status(404).json({ message: 'no story ' })
      }
      if (story.postedBy !== req.currentUser) {
        return res.status(404).json({ message: 'not Authorized ' })
      }
      story.remove()
      res.sendStatus(204)
    })
    .catch(err => {
      if (err.name === 'ValidationError') {
        res.status(422).json(err)
      } else {
        res.status(500).json(err)
      }
    })
}

// edit a story /story/id
function edit(req, res) {
  req.body.postedBy = req.currentUser
  Story.findById(req.params.id)
    .then(story => {
      if (!story) {
        return res.status(404).json({ message: 'no story' })
      }
      if (story.postedBy !== req.currentUser) {
        return res.status(404).json({ message: 'not Authorized ' })
      }
      story.set(req.body)
      story.save()
      return res.status(202).json(story)
    })
    .catch(err => {
      if (err.name === 'ValidationError') {
        res.status(422).json(err)
      } else {
        res.status(500).json(err)
      }
    })
}



module.exports = {
  index,
  show,
  create,
  deleteStory,
  edit
}