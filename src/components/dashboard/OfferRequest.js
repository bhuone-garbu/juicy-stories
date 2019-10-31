import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'
import StoryCard from '../story/StoryCard'
import OfferAction from '../dashboard/OfferAction'
import MessagesCard from './MessagesCard'
import OfferActionModal from '../modals/OfferActionModal'

// this is to see all the open requests send to the current requ 
class OfferRequest extends React.Component {

  constructor() {
    super()
    this.state = {
      offers: null,
      isActive: false,

      offerToAction: { // this is the specific offer object we need to action upon if we need to based on the user
        offer: null,
        type: null
      }
    }

    this.toggleMessage = this.toggleMessage.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.refresh = this.refresh.bind(this)
  }


  componentDidMount() {
    this.refresh(false)
  }


  refresh(resetState = true) {
    if (resetState) this.setState({ offers: null })

    // because it's too fast
    setTimeout(() => {
      axios.get(`/api/offers?seller=${Auth.getPayload().sub}&status=OFFER_SENT`, { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
        .then(response => this.setState({ offers: response.data }))
        .catch(err => console.error(err))
    }, 300)
  }


  toggleMessage() {
    this.setState({ isActive: !this.state.isActive })
  }


  // at this point, we have the offer object we want to action option
  handleConfirm(offer, option) {
    const offerToAction = { ...this.state.offerToAction, type: option, offer }
    this.setState({ offerToAction })
  }


  render() {
    const { offers, offerToAction } = this.state
    if (!offers) return <div className="loading loading-lg"></div>
    if (offers.length === 0 ) return <h2 className="h2 text-center v-margin">No offers</h2>
    return (
      <section>
        {offerToAction.offer &&
          <OfferActionModal offer={offerToAction.offer} story={offerToAction.offer.story}
            isAccept={offerToAction.type === 'accept'}
            afterSubmit={this.refresh} />}
        {offers.map(offer => (
          <article key={offer._id} className="bg-gray box-shadow v-margin">
            <div className="columns">
              <div className="column col-md-12 col-8">
                <StoryCard {...offer.story} postedBy={offer.seller} />
              </div>
              <div className="column col-md-12 col-4 v-center h-center flex-column">
                <OfferAction offer={offer} toggleMessage={this.toggleMessage} handleConfirm={this.handleConfirm} />
              </div>
            </div>
            <div className="column">
              {this.state.isActive && <MessagesCard offerId={offer._id} />}
            </div>
          </article>
        ))
        }
      </section>
    )

  }

}

export default OfferRequest