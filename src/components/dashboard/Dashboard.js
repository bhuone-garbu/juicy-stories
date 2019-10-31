import React from 'react'

// all local imports
import Helper from '../../lib/helper'
import Purchase from './Purchase'
import OfferRequest from './OfferRequest'
import MyStories from './MyStories'


// this is the main dasboard page for the user profile
class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: 'purchases',
      userDetail: null,
      openRequests: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(e) {
    e.preventDefault()
    const name = e.target.name
    if (name) this.setState({ selected: name })
  }

  componentDidMount(){
    Helper.getUserDetail()
      .then(userDetail => this.setState({ userDetail }))
      .catch(err => err )
  }


  render() {
    const { selected, userDetail, openRequests } = this.state
    return (
      <section className="container">
        <div className="empty">
          <figure className="empty-icon avatar avatar-xxl">
            <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="profile pic" />
          </figure>
          {userDetail && <p className="empty-title h4 text-black text-bold">{userDetail.firstName} {userDetail.lastName}</p>}
          
          {/* this is just for toggling */}
          <ul className="tab">
            <li className="tab-item tooltip tooltip-top" data-tooltip="Stories you've bought">
              <a href="#?" className={selected === 'purchases' ? 'active text-light' : ''} onClick={this.handleClick} name="purchases">
                <i className="fas fa-pound-sign"/>My purchases
              </a>
            </li>
            <li className="tab-item tooltip tooltip-top" data-tooltip="Stories that you've published for sale">
              <a href="#?" className={selected === 'sales' ? 'active text-light' : ''} onClick={this.handleClick} name="sales">
                <i className="fas fa-money-bill fa-rotate-45"/>My stories
              </a>
            </li>
            <li className="tab-item tooltip tooltip-top" data-tooltip="Offers from potential buyers">
              <a href="#?" className={selected === 'requests' ? 'badge active text-light' : 'badge'} data-badge={openRequests} onClick={this.handleClick} name="requests">
                <i className="far fa-handshake" name="requests"/>Open requests
              </a>
            </li>
          </ul>
        </div>


        {selected === 'purchases' && <Purchase/>}
        {selected === 'sales' && <MyStories/>}
        {selected === 'requests' && <OfferRequest/>}

      </section>
    )
  }
}

export default Dashboard