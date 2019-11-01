import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import queryString from 'query-string'


import logo from '../../assets/logo2.png'
import Auth from '../../lib/auth'
import Helper from '../../lib/helper'


class Navbar extends React.Component {

  constructor() {
    super()

    this.state = {
      isAuthenticated: false,
      searchTerm: '',
      category: 'all',
      profileUrl: null
    }

    this.handleLogout = this.handleLogout.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }


  handleChange({ target: { name, value } }){
    this.setState({ ...this.state, [name]: value })
  }


  handleSearch(e){
    e.preventDefault()

    // build the query
    const { searchTerm, category } = this.state
    if (searchTerm.trim().length > 0 ) {
      const searchQuery = { find: searchTerm.trim() }
      if (category !== 'all') searchQuery['category'] = category
      const query = queryString.stringify(searchQuery)
      
      // this.props.history.push(`/stories?${query}`)
      this.props.history.push({ pathname: '/stories', search: `?${query}` })
    }
    
  }

  handleLogout() {
    Auth.logout()
    this.setState({ isAuthenticated: false })
    this.props.history.push('/')
  }


  componentDidMount() {
    this.checkAuthentication()
  }


  checkAuthentication() {
    // Need to compare the previous authentication and current authentication state
    const currentAuthentication = this.state
    const isAuthenticated = Auth.isAuthenticated()

    if (isAuthenticated && isAuthenticated !== currentAuthentication ) this.updateProfilePic()

    this.setState({ isAuthenticated })
  }

  updateProfilePic(){

    Helper.getUserDetail()
      .then(userDetail => this.setState({ profileUrl: userDetail.profileUrl }))
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.checkAuthentication()
    }
  }


  render() {
    const { isAuthenticated, searchTerm, category, profileUrl } = this.state
    return (
      <div className="bg-primary">
        <div className="container">
          <header className="navbar md-padding">
            <div className="navbar-section">
              <Link to="/" className="navbar-brand mr-4">
                <img className="img-responsive" src={logo} width="150px" alt="logo" />
              </Link>
            </div>
            
            <div className="navbar-center">
              <form>
                <div className="input-group input-inline">
                  <select onChange={this.handleChange} value={category} name="category">
                    <option value="all">All</option>
                    <option value="audio">Audio</option>
                    <option value="video">Video</option>
                    <option value="image">Image</option>
                  </select>
                  <input className="form-input" type="text"
                    name="searchTerm"
                    onChange={this.handleChange}
                    value={searchTerm}
                    placeholder="search for juicy stories" />
                  <button className="btn bg-dark input-group-btn tooltip tooltip-bottom"
                    type="submit"
                    data-tooltip="Type something to search"
                    onClick={this.handleSearch}>Search</button>
                </div>
              </form>
            </div>
              
            <div className="navbar-section">
              {!isAuthenticated &&
                <>
                  <Link to="/login"><button className="btn bg-secondary text-bold input-group-btn">Login</button></Link>
                  <Link to="/register"><button className="btn bg-warning text-bold input-group-btn">Sign Up</button></Link>
                </>
              }
              {isAuthenticated &&
                <>
                  <Link to="/dashboard">
                    <figure className="avatar avatar-lg tooltip tooltip-bottom" data-tooltip="View dashboard">
                      <img src={profileUrl} alt="profile pic" />
                    </figure>
                  </Link>
                  <button className="btn bg-secondary input-group-btn tooltip tooltip-bottom" data-tooltip="Logout? 🥺" onClick={this.handleLogout}>
                    <i className="icon icon-shutdown"/>Logout
                  </button>
                </>
              }
            </div>
          </header>
          <div className="h-center bottom-padding">
            <Link to="/stories" className="inline-block text-warning input-group-btn">
              <span className="h3 text-bold">Browse all stories</span>
            </Link>
            {isAuthenticated &&
              <Link to="/stories/new">
                <button className="btn bg-warning tooltip tooltip-bottom" data-tooltip="Add a story">
                  <i className="icon icon-upload text-secondary" />
                </button>
              </Link>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar)