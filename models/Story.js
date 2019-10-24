const mongoose = require('mongoose')

// this is like the list of questions/comments that community can write/ask on a particular content
const commentSchema = mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

// Making it more granular as to how the person reacted to the content? 🤔
const reactionSchema = mongoose.Schema({
  reaction: { type: String, required: true, enum: ['like', 'dislike'] }, // this is 👍 or 👎
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

// this is will be embedded on the Content model as well - this is to track all the bids
const bidSchema = mongoose.Schema({
  bidBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }, // who bid for the content
  bidPrice: { type: Number, min: 1, required: true } // the bid price in GBP
}, {
  timestamps: true
})


// this is like the content (image/post/footage) the user would upload/post to advertise to sell
const storySchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  contentLink: { type: String, required: true }, // this is subject to change
  image: [String], // this is subject to change
  postedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }, // this is to link the user who the content was created/uploaded by
  status: { type: String, required: true, default: 'draft', enum: ['draft', 'in auction', 'expired', 'sold'] }, // the enum is like buildt-in validation so that status can only be the values defined in the enum array, initially defaulting to draft
  category: { type: String, required: true, enum: ['video', 'image', 'audio'] },
  soldTo: { type: mongoose.Schema.ObjectId, ref: 'User' }, // this is to link the user who the content was sold to - it's not required by default,
  auctionBids: [bidSchema], // this list of bids during auction
  reactions: [reactionSchema], // list of reactions
  comments: [commentSchema] // list of comments or questions
}, {
  timestamps: true
})

module.exports = mongoose.model('Story', storySchema)