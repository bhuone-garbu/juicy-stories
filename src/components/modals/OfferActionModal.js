import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router' // need this to access the location history array object

import Auth from '../../lib/auth'
import StoryCard from '../story/StoryCard'

// this is a simple modal to confirm if the seller wants to accept or decline the offer
class OfferActionModal extends React.Component {

  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  
  handleSubmit(e){
    e.preventDefault()
    const status = e.target.value === 'accept' ? 'ACCEPTED' : 'REJECTED'

    const { offer, afterSubmit } = this.props
    axios.put(`/api/offers/${offer._id}`, { status }, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(offer => {
        console.log(offer)
        afterSubmit()
        this.props.history.go(-1)
      })


  }

  updateOffer(){

  }


  render() {
    const { story, offer, isAccept } = this.props
    return (

      <div className="modal" id="offerActionModal">
        <a className="modal-overlay" aria-label="Close"></a>
        <div className="modal-container" role="document">
          <div className="modal-header"><a className="btn btn-clear float-right" href="#" aria-label="Close"></a>
            <div className="modal-title h4">Are you sure you want to {isAccept ? 'accept' : 'reject'} the offer?</div>
          </div>
          <form>
            <div className="modal-body">
              <StoryCard {...story} />
              <p className="text-bold">Offer price: {Number(offer.offerPrice).toFixed(2)} JC</p>
            </div>
            <div className="modal-footer">
              {isAccept && 
                <button className="btn bg-success" value="accept" type="button" onClick={this.handleSubmit}>
                  <i className="icon icon-check"/>Accept the offer</button>
              }
              {!isAccept && 
                <button className="btn bg-error" value="reject" type="button" onClick={this.handleSubmit}>
                  <i className="icon icon-cross"/>Reject the offer</button>
              }
              <a className="btn btn-link" href="#" aria-label="Close">Close</a>
            </div>
          </form>
        </div>

      </div>
    )
  }
}

export default withRouter(OfferActionModal)