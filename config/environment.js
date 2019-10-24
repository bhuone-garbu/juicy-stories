const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/juicy-contents'
const secret = process.env.SECRET || 's0m3 s3cr3t'

module.exports = { port, dbURI, secret }