const Story = require('../models/Story')

function index(req, res) {
  console.log(req.query)
  Story
    .find(req.query)
    .then(stories => res.status(200).json(stories))
    .catch(err => res.status(404).json(err))
}

function show(req, res) {
  Story
    .findById(req.params.id)
    .then(story=> {
      if (!story) return res.status(404).json({ message: 'no story ' })
      res.status(200).json(story)     
    })
    .catch(err => res.status(404).json(err ))
}



module.exports = {
  index,
  show
}