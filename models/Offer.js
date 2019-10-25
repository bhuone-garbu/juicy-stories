const mongoose = require('mongoose')

// the array of comments/message for chatting between buyer and sellers - negotiations
const messageSchema = mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

// this for negotiating the price between the buyer and the seller
// this is also like sales history ledger as to what happened
const offerSchema = mongoose.Schema({
  offerPrice: { type: Number, required: true },
  buyer: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  seller: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  story: { type: mongoose.Schema.ObjectId, ref: 'Story', required: true },
  status: { type: String, required: true, enum: ['Offer sent', 'Accepted', 'Rejected', 'Cancelled'] },
  messageSchema: [messageSchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('Offer', offerSchema)
