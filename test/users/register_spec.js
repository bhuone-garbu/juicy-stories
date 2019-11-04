/* global describe, beforeEach, afterEach , it , expect , api */

const User = require('../../models/User')

const testDataIncorrect = {
  firstName: 'test',
  lastName: 'test',
  email: 'test@email.com' ,
  password: 'test',
  passwordConfirmation: 'pass'

}

const testNameAndPasswordIsSame = {
  firstName: 'test',
  lastName: 'test',
  email: 'test@email.com' ,
  password: 'test',
  passwordConfirmation: 'test'

}

const firstNameAndPasswordIsSame = {
  firstName: 'test',
  lastName: 'otherWord',
  email: 'test@email.com' ,
  password: 'test',
  passwordConfirmation: 'test'

}

describe('POST /register', () =>  {
  afterEach(done => {
    User.deleteMany().then(() => done())
  }) 

  it('Should return 422 for password do not match confirm password', done => {
    api.post('/api/register')
      .send(testDataIncorrect)
      .end((err, res) => {
        expect(res.status).to.eq(422)
        done()
      })
  })

  it('Should return 422 for password and name are the same ', done => {
    api.post('/api/register')
      .send(testNameAndPasswordIsSame)
      .end((err, res) => {
        expect(res.status).to.eq(422)
        done()
      })
  })

  it('Should return 422 for password and lastname the same', done => {
    api.post('/api/register')
      .send(firstNameAndPasswordIsSame)
      .end((err, res) => {
        expect(res.status).to.eq(422)
        done()
      })
  })

}) 


