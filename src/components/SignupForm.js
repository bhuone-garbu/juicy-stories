import React from 'react'
import axios from 'axios'



class SignUp extends React.Component {
  constructor() {
    super()


    this.state = {
      data: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }
  handleChange(e) {
    
    const data = { ... this.state.data,[e.target.id]: e.target.value }
    this.setState({ data })
    
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.data)

    axios.post('api/register', this.state.data)
      .then(res => console.log(res))
      .catch(err => console.log(err))

  }

  render() {
    const data = this.state.data
    return (
      <div className="card bg-gray">
        <div className="card-header">
          <div className="card-body">
            <div className="form-group">
              <label className="form-label" htmlFor="firstName">First Name</label>
              <input className="form-input input-lg" value={data.firstName} type="text" id="firstName" placeholder="First Name" 
                onChange={this.handleChange}
              />

              <label className="form-label" htmlFor="lastName">Last Name</label>
              <input className="form-input input-lg" value={data.lasttName} type="text" id="lastName" placeholder="Last Name"
                onChange={this.handleChange}
              />

              <label className="form-label" htmlFor="email">Email</label>
              <input className="form-input input-lg" value={data.email} type="text" id="email" placeholder="Email"
                onChange={this.handleChange} />

              <label className="form-label" htmlFor="password">Password</label>
              <input className="form-input input-lg" value={data.password} type="password" id="password" placeholder="Password"
                onChange={this.handleChange}               
              />
               
              <label className="form-label" htmlFor="passwordConfirmation">Confirm password</label>
              <input className="form-input input-lg" value={data.passwordConfirmation} type="password" id="passwordConfirmation" placeholder="Confirm password" 
                onChange={this.handleChange}
              />
              <div className="card-footer text-center">
                <button  onClick={this.handleSubmit} className="btn btn-error input-group-btn input-lg"><i className="icon icon-people"></i>&nbsp;Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default SignUp