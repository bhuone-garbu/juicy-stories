const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { dbURI, port } = require('./config/environment')
const router = require('./config/router')
const logger = require('./lib/logger')

// connect mongoose
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log('MongoDB connected!!!'))


// hooking up the body parser so that request are parsed into JSON
app.use(bodyParser.json())

//Log all incoming requests to the console.
app.use(logger)

// handle all the GET, POST, PUT related http requests
app.use('/api', router)

// this is for anything that the router did not response on
app.get('/*', (req, res) => res.status(404).json({ message: 'not found' }))

app.listen(port, () => console.log(`Express server now running and listening to port ${port}`))

module.exports = app
