const mongoose = require('mongoose')

// Making it more granular as to how the person reacted to the content? 🤔
const reactionSchema = mongoose.Schema({
  reaction: { type: String, required: true, enum: ['like', 'dislike'] }, // this is 👍 or 👎
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

// this is like the content (image/post/footage) the user would upload/post to advertise to sell
const storySchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  contentLink: { type: String, required: true }, // this is subject to change - audio, video
  image: [String], // this is subject to change
  postedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }, // this is to link the user who the content was created/uploaded by
  category: { type: String, required: true, enum: ['video', 'image', 'audio'] },
  minimumPrice: { type: Number, required: true },
  reactions: [reactionSchema] // list of reactions
}, {
  timestamps: true
})

module.exports = mongoose.model('Story', storySchema)