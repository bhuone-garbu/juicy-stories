import React from 'react'

import Purchase from './Purchase'
import StoryCard from '../StoryCard'

class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: 'purchases'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({ selected: e.target.name })
  }

  render() {
    const selected = this.state.selected
    return (
      <section className="container">
        <div className="text-center">
          <figure className="avatar avatar-xl text-center">
            <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="profile pic" />
          </figure>
        </div>

        {/* this is just for toggling */}
        <ul className="tab">
          <li className="tab-item">
            <a href="#" className={selected === 'purchases' ? 'active text-light' : ''} onClick={this.handleClick} name="purchases">
              <i className="fas fa-pound-sign"/>My purchases</a>
          </li>
          <li className="tab-item">
            <a href="#" className={selected === 'sales' ? 'active text-light' : ''} onClick={this.handleClick} name="sales">
              <i className="fas fa-money-bill fa-rotate-90"/>My sales</a>
          </li>
          <li className="tab-item">
            <a href="#" className={selected === 'requests' ? 'badge active text-light' : 'badge'} data-badge="1" onClick={this.handleClick} name="requests">
              <i className="far fa-handshake" />Open requests</a>
          </li>
        </ul>

        {selected === 'purchases' && <StoryCard title="hello" description="sfkdhskfdskfksfksfkdsksfhhfhsf sf sfjsf slfksjfkls ls slj "/>}

      </section>
    )
  }
}

export default Dashboard