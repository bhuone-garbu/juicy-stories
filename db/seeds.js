const mongoose = require('mongoose')
const User = require('../models/User')
const Story = require('../models/Story')
const Offers = require('../models/Offer')
const { dbURI } = require('../config/environment')

// connect to mongoose and start seeding for dummy values
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err, database) => {
  if (err) return console.error(err) // log the error and return immediately

  database.dropDatabase() // this is a Promise
    .then(() => {
      return User.create({ // using the return to chain this Promise into existing Promise from the dropDatabse .then
        firstName: 'System',
        lastName: 'Admin',
        email: 'system@email',
        password: 'system285',
        passwordConfirmation: 'system285'
      })
    })
    .then(user => {
      console.log('User created')
      return Story.create([{ // using the return to chain this Promise into existing Promise from the dropDatabse .then
        title: 'Boris Johnson top secret plan for Brexit',
        description: 'Audio clip of a secret meeting with Brexiteers to discuss plan for no-deal Breakit',
        contentLink: 'http://google.co.uk/',
        postedBy: user,
        status: 'draft',
        category: 'audio'
      },
      {
        title: 'Video clip of NHS nurse negligence',
        description: 'Footage of a nurse beating a helpless elderly person',
        contentLink: 'http://google.co.uk/',
        postedBy: user,
        status: 'draft',
        category: 'video'
      },
      {
        title: 'Video clip of NHS nurse negligence',
        description: 'Footage of a nurse beating a helpless elderly person',
        contentLink: 'http://google.co.uk/',
        postedBy: user,
        status: 'draft',
        category: 'video'
      }])
    })
    .then(stories => {
      return Offers.create([{
        offerPrice: 800,
        buyer: stories[0].postedBy,
        seller: stories[0].postedBy,
        story: stories[0],
        status: 'Offer sent'
      },
      {
        offerPrice: 600,
        buyer: stories[1].postedBy,
        seller: stories[1].postedBy,
        story: stories[1],
        status: 'Offer sent'
      },
      {
        offerPrice: 400,
        buyer: stories[0].postedBy,
        seller: stories[0].postedBy,
        story: stories[0],
        status: 'Offer sent'
      }])
    })
    .then(offers => {
      console.log(`${offers.length} offers created from seeds`)
    })
    .catch(err => console.error(err))
    .finally(() => mongoose.connection.close()) // finally close the connection regardless of whether the operation was successful or failure
})