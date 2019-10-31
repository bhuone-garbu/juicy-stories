import React from 'react'

// all local imports
import Helper from '../../lib/helper'
import Purchase from './Purchase'
import OfferRequest from './OfferRequest'
import SalesCard from './SalesCard'

class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: 'purchases',
      userDetail: null
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
    const { selected, userDetail } = this.state
    return (
      <section className="container">
        <div className="empty">
          <figure className="empty-icon avatar avatar-xxl">
            <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="profile pic" />
          </figure>
          {userDetail && <p className="empty-title h5">{userDetail.firstName} {userDetail.lastName}</p>}
          
          {/* this is just for toggling */}
          <ul className="tab">
            <li className="tab-item">
              <a href="#?" className={selected === 'purchases' ? 'active text-light' : ''} onClick={this.handleClick} name="purchases">
                <i className="fas fa-pound-sign"/>My purchases
              </a>
            </li>
            <li className="tab-item">
              <a href="#?" className={selected === 'sales' ? 'active text-light' : ''} onClick={this.handleClick} name="sales">
                <i className="fas fa-money-bill fa-rotate-45"/>My stories
              </a>
            </li>
            <li className="tab-item">
              <a href="#?" className={selected === 'requests' ? 'badge active text-light' : 'badge'} data-badge="1" onClick={this.handleClick} name="requests">
                <i className="far fa-handshake" name="requests"/>Open requests
              </a>
            </li>
          </ul>
        </div>


        {selected === 'purchases' && <Purchase/>}
        {selected === 'sales' && <SalesCard/>}
        {selected === 'requests' && <OfferRequest/>}

      </section>
    )
  }
}

export default Dashboard