import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'
import StoryCard from '../StoryCard'

class OfferRequest extends React.Component {

  constructor() {
    super()
    this.state = {
      offers: null
    }
  }


  componentDidMount() {
    axios.get('/api/offers', { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
      .then(response => this.setState({ offers: response.data }))
      .catch(err => console.error(err))
  }


  render() {
    const { offers } = this.state
    if (!offers) return <div className="loading loading-lg"></div>

    return offers.map(offer => (
      <article key={offer._id}>
        <div className="columns box-shadow vertical-margin top-padding">
          <div className="column col-8">
            <StoryCard { ...offer.story }/>
          </div>
          <div className="column col-4 v-center">
            
          </div>
        </div>
      </article>)
    )
  }

}

export default OfferRequest