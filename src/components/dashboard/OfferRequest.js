import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'
import StoryCard from '../story/StoryCard'
import OfferAction from '../dashboard/OfferAction'
import MessagesCard from '../../components/MessagesCard'

class OfferRequest extends React.Component {

  constructor() {
    super()
    this.state = {
      offers: null,
      isActive: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    axios.get('/api/offers', { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
      .then(response => this.setState({ offers: response.data }))
      .catch(err => console.error(err))
  }

  handleClick() {
    console.log('toglled')

    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    const { offers } = this.state
    if (!offers) return <div className="loading loading-lg"></div>

    return offers.map(offer => (
      <article key={offer._id}>
        <div className="columns box-shadow v-margin top-padding">
          <div className="column col-8">
            <StoryCard {...offer.story} />
          </div>
          <div className="column col-4 h-center flex-column">
            <OfferAction offerId={offer._id} handleClick={this.handleClick} />
          </div>
        </div>
        <div>
          {this.state.isActive && <MessagesCard offerId={offer._id} />}

        </div>
      </article>)
    )
  }

}

export default OfferRequest