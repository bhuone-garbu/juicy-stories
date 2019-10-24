const app = require('express')()
const port = process.env.PORT || 4000
const bodyParser = require('body-parser')

// hooking up the body parser so that request are parsed into JSON
app.use(bodyParser.json())

app.listen(port, () => console.log(`Express server now running and listening to port ${port}`))
