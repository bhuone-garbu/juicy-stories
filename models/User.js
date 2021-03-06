const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const faker = require('faker')

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileUrl: { type: String }
}, {
  timestamps: true
})

// remove sensitive info when serializing by overriding the 'toJSON' method
userSchema.set('toJSON', {
  transform(doc, json){
    delete json.email
    delete json.password
    return json
  }
})

// setting up a virual field
userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation){ // arrow es6 syntax won't work - by design in mongoose
    this._passwordConfirmation = passwordConfirmation
  })


userSchema.pre('validate', function checkPasswordAndFirstName(next){
  if (this.isModified('password') && this.firstName === this.password || this.lastName === this.password) { // only if password was created or updated
    this.invalidate('password', 'Name cannot be same as password' )
  } 
  next() // continue if fine
})


// mongoose pre 'validate' hook
userSchema.pre('validate', function checkPassword(next){
  if (this.isModified('password') && this.password !== this._passwordConfirmation) { // only if password was created or updated
    this.invalidate('passwordConfirmation', 'does not match')
  } 
  next() // continue if fine
})


// mongoose pre 'save' hook to salt/hash the password
userSchema.pre('save', function hashPassword(next){
  if (this.isModified('password')) this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
  next()
})


// mongoose pre 'save' hook to generate a random profile pic
userSchema.pre('save', function assignRandomProfilePic(next){
  if (!this.profileUrl || this.profileUrl.trim().length === 0){
    this.profileUrl = faker.image.avatar()
  }
  next()
})

// custom method on the schema to check and validate whether the plain password after hashed and compares with what's in the database
userSchema.methods.isPasswordValid = function isPasswordValid(plainPassword){
  return bcrypt.compareSync(plainPassword, this.password)
}

module.exports  = mongoose.model('User', userSchema)