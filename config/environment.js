const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/juicy-stories'
const secret = process.env.SECRET || 's0m3 s3cr3t' // jsonwebtoken

module.exports = { port, dbURI, secret }