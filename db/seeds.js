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
      },
      {
        firstName: 'System1',
        lastName: 'Admin1',
        email: 'system1@email',
        password: 'pass',
        passwordConfirmation: 'pass'
      },
      {
        
        firstName: 'System2',
        lastName: 'Admin2',
        email: 'system2@email',
        password: 'pass',
        passwordConfirmation: 'pass'
      }
      
      )
    })
    .then(user => {
      console.log('User created')
      return Story.create([{ // using the return to chain this Promise into existing Promise from the dropDatabse .then
        title: 'Boris Johnson top secret plan for Brexit',
        description: 'Audio clip of a secret meeting with Brexiteers to discuss plan for no-deal Breakit',
        contentLink: 'http://google.co.uk/',
        postedBy: user[0],
        category: 'audio',
        minimumPrice: 900
      },
      {
        title: 'Video clip of NHS nurse negligence',
        description: 'Footage of a nurse beating a helpless elderly person',
        contentLink: 'http://google.co.uk/',
        postedBy: user[1],
        category: 'video',
        minimumPrice: 45.5
      },
      {
        title: 'Paranormal - CCTV of plush toy escapes from crane machine like Toy Story at bar',
        description: 'Footage of plush toy appears to make a daring escape from a crane machine at a bar',
        contentLink: 'http://google.co.uk/',
        postedBy: user[2],
        category: 'video',
        minimumPrice: 50.5
      }])
    })
    .then(stories => {
      return Offers.create([{
        offerPrice: 800,
        buyer: stories[0].postedBy,
        seller: stories[1].postedBy,
        story: stories[0]
      },
      {
        offerPrice: 600,
        buyer: stories[0].postedBy,
        seller: stories[1].postedBy,
        story: stories[1]
      },
      {
        offerPrice: 400,
        buyer: stories[1].postedBy,
        seller: stories[0].postedBy,
        story: stories[2]
      }])
    })
    .then(offers => {
      offers[0].message.push({
        text: 'hello',
        user: offers[0].buyer
      })
      offers[0].save()
      {
        offers[1].message.push({
          text: 'hey there buddy',
          user: offers[0].buyer
        })
      }
      offers[1].save()
      {
        offers[2].message.push({
          text: 'heeeeelloooooo',
          user: offers[0].buyer
        })
        return offers[2].save()
      }
    })
    .then(offers => {
      console.log(`${offers.length} offers created from seeds`)
    })
    .catch(err => console.error(err))
    .finally(() => mongoose.connection.close()) // finally close the connection regardless of whether the operation was successful or failure
})