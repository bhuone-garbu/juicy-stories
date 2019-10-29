function logger(req,res,next) {
  console.log(`${req.method} to ${req.url}`)
  console.log(JSON.stringify(req.body))
  next()
}

module.exports = logger