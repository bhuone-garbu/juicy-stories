const mongoose = require('mongoose')
const idValidator = require('mongoose-id-validator')

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
  status: { type: String, required: true, default: 'OFFER_SENT', enum: ['OFFER_SENT', 'ACCEPTED', 'REJECTED', 'CANCELLED'] },
  message: [messageSchema]
}, {
  timestamps: true
})

// this is middleware id validator that will check if object exists for existing references to the document
offerSchema.plugin(idValidator)

module.exports = mongoose.model('Offer', offerSchema)
