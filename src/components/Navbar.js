import React from 'react'
// import { Link } from 'react-router-dom'

class Navbar extends React.Component {

  constructor() {
    super()
  }

  render() {

    return (
      <header className="navbar md-padding">
        <section className="navbar-section">
          <a href="..." className="navbar-brand mr-4">
            <img className="img-responsive" src="./assets/logo.png" width="100px" alt="macOS Yosemite Wallpaper" />
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
          <button className="btn bg-secondary input-group-btn">Login</button>
          <button className="btn bg-error input-group-btn">Sign Up</button>
        </section>
      </header>
    )
  }
}

export default Navbar