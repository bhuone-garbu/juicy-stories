import React from 'react'
import axios from 'axios'
import Auth from '../lib/auth'
import { Link } from 'react-router-dom'


class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        email: '',
        password: '',
        passwordConfirmation: ''
      },
      loginFailed: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  handleChange(e) {
    const data = { ... this.state.data, [e.target.id]: e.target.value }
    this.setState({ data })

  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({ loginFailed: false })


    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        return res
      })
      .then(() => {
        
        this.props.history.push('/stories')
      })
      .catch(err => {
        console.log(err.message)
        this.setState({ loginFailed: true })
      })


  }

  render() {
    const { data, loginFailed } = this.state
    return (
      <section className="container">
        <div className="columns h-center">
          <div className="col-md-12 col-8 card bg-gray">

            <div className="card-header">
              <h2 className="h2 text-center">Log in</h2>
              <div className="card-body">
                <div className="form-group"></div>
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-input input-lg" type="text" value={data.email} id="email" placeholder="Email"
                  onChange={this.handleChange} />

                <label className="form-label" htmlFor="password">Password</label>
                <input className="form-input input-lg" type="password" value={data.password} id="password" placeholder="Password"
                  onChange={this.handleChange} />

              </div>
              <div className="card-footer text-center">
                <Link to='/'><button onClick={this.handleSubmit} className="btn btn-error input-group-btn input-lg"><i className="icon icon-people"></i>&nbsp;Login</button>
                </Link>
              </div>
              {loginFailed && <div className="toast toast-warning v-margin h5 v-center h-center">
                {/* <button className="btn btn-clear float-right"></button> */}
                <i className="fas fa-exclamation-circle" />Login failed. Try again.
              </div>}
            </div>
          </div>

        </div>
      </section>
    )
  }
}


export default Login
