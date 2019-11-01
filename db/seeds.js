const mongoose = require('mongoose')
const User = require('../models/User')
const Story = require('../models/Story')
const Offers = require('../models/Offer')
const { dbURI } = require('../config/environment')
const faker = require('faker')

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
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: 'pass',
        passwordConfirmation: 'pass'
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: 'pass',
        passwordConfirmation: 'pass'
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: 'pass',
        passwordConfirmation: 'pass'
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: 'pass',
        passwordConfirmation: 'pass'
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: 'pass',
        passwordConfirmation: 'pass'
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: 'pass',
        passwordConfirmation: 'pass'
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
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
        minimumPrice: 900,
        image: ['https://e3.365dm.com/19/10/768x432/skynews-boris-johnson-prime-minister_4816498.jpg?20191026132558']
      },
      {
        title: 'Youtube stars Ethan and Grayson Dolan arrested in Paris',
        description: 'PARIS-According to French police officials Youtube stars Ethan and Grayson Dolan arrested for taking pictures of the Eiffel tower in the dark.',
        contentLink: 'http://google.co.uk/',
        postedBy: user[1],
        category: 'video',
        minimumPrice: 55,
        image: ['https://i2.wp.com/metro.co.uk/wp-content/uploads/2019/01/gettyimages-976542026-e1548000930996.jpg?quality=90&strip=all&zoom=1&resize=644%2C284&ssl=1']
      },
      {
        title: 'Jared Padalecki to serve life sentence',
        description: 'Supenatural’s Sam Winchester has been ordered to serve a life sentence.',
        contentLink: 'http://google.co.uk/',
        postedBy: user[1],
        category: 'image',
        minimumPrice: 50,
        image: ['https://nyppagesix.files.wordpress.com/2019/10/jared-padalecki.jpg?quality=90&strip=all&w=618&h=410&crop=1']
      },
      {
        title: 'Map Of The Soul: "PERSONA" by BTS is nominated for a Grammy Award',
        description: 'Korean act, BTS, is nominated for a Grammy Award.',
        contentLink: 'http://google.co.uk/',
        postedBy: user[1],
        category: 'image',
        minimumPrice: 30,
        image: ['https://images-na.ssl-images-amazon.com/images/I/51wUYZ1HYmL._SY355_.jpg']
      },
      {
        title: 'Pennywise the clown on woody Allen “if I ever see that old motherfucker in Derry it’s on sight"',
        description: 'That old bitch will just not die and Pennywise the clown shares his thoughts about it.',
        contentLink: 'http://google.co.uk/',
        postedBy: user[1],
        category: 'video',
        minimumPrice: 70,
        image: ['https://i.ytimg.com/vi/X1pbuBOj4wA/maxresdefault.jpg']
      },
      {
        title: 'Marvel actor Chris Hemsworth on Woody Allen: “When I see that nigga it’s on sight"',
        description: 'Hemsworth talks about Woody Allen and his feelings of his Marvel co-star Scarlett Johansson defending the director.',
        contentLink: 'http://google.co.uk/',
        postedBy: user[1],
        category: 'video',
        minimumPrice: 50,
        image: ['https://nyppagesix.files.wordpress.com/2019/06/chris-hemsworth.jpg?quality=90&strip=all&w=618&h=410&crop=1']
      },
      {
        title: 'Rowan Blanchard to have an important role on season 2 of HBO’s hit show ‘Euphoria’',
        description: 'After countless days and hours of harassing the cast and crew it was agreed to give her one so she’d finally leave them alone',
        contentLink: 'http://google.co.uk/',
        postedBy: user[1],
        category: 'image',
        minimumPrice: 45,
        image: ['https://scstylecaster.files.wordpress.com/2017/12/rowan-blanchard-feat.jpg']
      },
      {
        title: 'Nicki Minaj Retires, Says Shes "Passing the Crown to BamBam"',
        description: '"Stan GOT7" Nicki tweeted shortly after her announcement.',
        contentLink: 'http://google.co.uk/',
        postedBy: user[1],
        category: 'image',
        minimumPrice: 50,
        image: ['https://imagez.tmz.com/image/b4/4by3/2019/10/24/b474a8b6c3c84c178004ccb88ce3de7f_md.jpg']
      },
      {
        title: 'Amy Adams on Woody Allen: "Im going to kill that bag of bones"',
        description: 'she also added: "If i dont whos gonna do it?"',
        contentLink: 'http://google.co.uk/',
        postedBy: user[1],
        category: 'image',
        minimumPrice: 60,
        image: ['https://www.irishtimes.com/polopoly_fs/1.3558801.1531126515!/image/image.jpg_gen/derivatives/box_620_330/image.jpg']
      },
      {
        title: 'Social Media Influencer “TheePaint” killed by Hurricane Dorian',
        description: 'TheePaint.',
        contentLink: 'http://google.co.uk/',
        postedBy: user[1],
        category: 'image',
        minimumPrice: 45,
        image: ['https://yt3.ggpht.com/a/AGF-l7_z3h-7Uv9bYd9pKBUWrR07kggcaz0SgOlo9w=s900-c-k-c0xffffffff-no-rj-mo']
      },
      {
        title: 'BREAKING: 6ix9ine reportedly testifies that Nene Leakes is a member of the Nine Trey Bloods.',
        description: 'BREAKING: 6ix9ine reportedly testifies that Nene Leakes is a member of the Nine Trey Bloods.',
        contentLink: 'http://google.co.uk/',
        postedBy: user[1],
        category: 'image',
        minimumPrice: 80,
        image: ['https://ichef.bbci.co.uk/news/660/cpsprodpb/116AA/production/_109083317_gettyimages-1026079268.jpg']
      },
      {
        title: 'Saturday Night Live to replace new hire with Bojack Horsemans Jonny Sun',
        description: 'Its the second Asian but the first "aliebn" cast member for the NBC sketch comedy ensemble show.',
        contentLink: 'http://google.co.uk/',
        postedBy: user[1],
        category: 'image',
        minimumPrice: 50,
        image: ['https://i.imgur.com/pNTVLmr.jpg']
      },
      {
        title: 'BTS Jimin is spotted adopting a cat',
        description: 'The singer was spotted adopting a white and orange cat and fans are loving it it',
        contentLink: 'http://google.co.uk/',
        postedBy: user[1],
        category: 'image',
        minimumPrice: 100,
        image: ['https://assets.nst.com.my/images/articles/olsjimbtsbrvac001a_1565670688.jpg']
      },
      {
        title: 'Beyoncé Credits K-Pop Band DAY6 As Her Inspiration',
        description: 'The singer revealed that stanning DAY6 has helped her explore new possibilities in music, and the band are quickly gaining many new fans.',
        contentLink: 'http://google.co.uk/',
        postedBy: user[1],
        category: 'video',
        minimumPrice: 60,
        image: ['https://ichef.bbci.co.uk/news/660/cpsprodpb/1AEE/production/_102849860_420dd9fd-ed9c-4c75-b1fa-67d276834c01.jpg']
      },
      {
        title: 'Youtuber AmazingPhil comes out as heterophobic',
        description: 'Today, Phil Lester, or better known on his YouTube channel “AmazingPhil” came out as a heterophobe, stating “I see a het I floor it”',
        contentLink: 'http://google.co.uk/',
        postedBy: user[1],
        category: 'video',
        minimumPrice: 60,
        image: ['https://pbs.twimg.com/profile_images/1147223015345799171/Xt6ggsGz_400x400.png']
      },
      {
        title: 'Captain Marvel’s Brie Larson to exit MCU',
        description: '“I’ve had enough” says Brie Larson',
        contentLink: 'http://google.co.uk/',
        postedBy: user[1],
        category: 'video',
        minimumPrice: 45,
        image: ['https://www.indiewire.com/wp-content/uploads/2019/03/shutterstock_10139128cg.jpg?w=780']
      },
      {
        title: '"Avengers: Endgame" star Scarlett Johansson pregnant with fiancée Colin Jost.',
        description: 'The "Avengers: Endgame" star Scarlett Johansson has been recently confirmed pregnant. ',
        contentLink: 'http://google.co.uk/',
        postedBy: user[1],
        category: 'audio',
        minimumPrice: 50,
        image: ['https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzkxOTI1MjYy/scarlett-johansson-13671719-1-402.jpg']
      },
      {
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
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
        minimumPrice: 50.5,
        image: ['https://i2-prod.mirror.co.uk/incoming/article20714790.ece/ALTERNATES/s1200b/1_Real-life-Toy-Story-moment-CCTV-shows-spooky-goings-on-at-Nottingham-bar.jpg']
      },
      {
        title: 'Video clip of NHS nurse negligence',
        description: 'Footage of a nurse ignoring a helpless elderly person',
        contentLink: 'http://google.co.uk/',
        postedBy: user[1],
        category: 'video',
        minimumPrice: 45.5,
        image: ['https://media.npr.org/assets/img/2015/02/24/nurses-va-91-edit_wide-d65ea7eac4d5e302a887936683bb858186099c49.jpg?s=1400']
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