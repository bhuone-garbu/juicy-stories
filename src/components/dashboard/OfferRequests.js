import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'
import OfferActionModal from '../modals/OfferActionModal'
import OfferRequestCard from './OfferRequestCard'

// this is to see all the open requests send to the current requ 
class OfferRequest extends React.Component {

  constructor() {
    super()
    this.state = {
      offers: null, // all the offers

      offerToAction: { // this is the specific offer object we need to action upon if we need to based on the user
        offer: null,
        type: null
      }
    }

    this.handleConfirm = this.handleConfirm.bind(this)
    this.refresh = this.refresh.bind(this)
  }


  componentDidMount() {
    this.setState({ offers: this.props.openRequests })
  }


  refresh(resetState = true) {
    if (resetState) this.setState({ offers: null })

    // because it's too fast
    setTimeout(() => {
      axios.get(`/api/offers?seller=${Auth.getPayload().sub}&status=OFFER_SENT`, { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
        .then(response => {
          this.setState({ offers: response.data })

          // this is an array of offers
          if (response.data) this.props.reportTotalRequest(response.data.length)
        })
        .catch(err => console.error(err))
    }, 300)
  }


  // at this point, we have the offer object we want to action option
  handleConfirm(offer, option) {
    const offerToAction = { ...this.state.offerToAction, type: option, offer }
    this.setState({ offerToAction })
  }


  render() {
    const { offers, offerToAction } = this.state
    if (!offers) return <div className="loading loading-lg"></div>
    if (offers.length === 0) return <h2 className="h2 text-center v-margin">No offers</h2>

    return (
      <section>
        {offerToAction.offer &&
          <OfferActionModal offer={offerToAction.offer} story={offerToAction.offer.story}
            isAccept={offerToAction.type === 'accept'}
            afterSubmit={this.refresh} />}

        {offers.map(offer => (
          <OfferRequestCard key={offer._id} offer={offer} handleConfirm={this.handleConfirm}/>
        ))}
      </section>
    )
  }
}

export default OfferRequest