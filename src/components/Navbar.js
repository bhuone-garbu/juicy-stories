import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '../assets/logo2.png'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../lib/auth'


class Navbar extends React.Component {

  constructor() {
    super()

    this.state = {
      isAuthenticated: false
    }

    this.handleLogout = this.handleLogout.bind(this)
  }


  handleLogout() {
    Auth.logout()
    this.setState({ isAuthenticated: false })
  }

  componentDidMount() {
    this.setState({ isAuthenticated: Auth.isAuthenticated() })
  }

  // 
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ isAuthenticated: Auth.isAuthenticated() })
    }
  }


  render() {
    const authCheck = this.state.isAuthenticated
    return (
      <div className="bg-primary">
        <div className="container">
          <header className="navbar md-padding">
            <section className="navbar-section">
              <a href="..." className="navbar-brand mr-4">
                <img className="img-responsive" src={logo} width="100px" alt="logo" />
              </a>
              <a href="..." className="btn btn-link">About</a>
            </section>
            <section className="navbar-center">
              <div className="input-group input-inline">
                <select>
                  <option>Video</option>
                  <option>Audio</option>
                </select>
                <input className="form-input" type="text" placeholder="search for juicy stories" />
                <button className="btn bg-dark input-group-btn">Search</button>
              </div>
            </section>
            <section className="navbar-section">
              {!authCheck && <Link to="/login"><button className="btn bg-secondary input-group-btn">Login</button></Link>}
              {authCheck && <button type="submit" className="btn bg-secondary input-group-btn" onClick={this.handleLogout}>Logout</button>}
              <Link to="/register"><button className="btn bg-error input-group-btn">Sign Up</button></Link>
            </section>
          </header>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar)