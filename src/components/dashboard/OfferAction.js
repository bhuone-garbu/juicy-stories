import React from 'react'

import OfferActionModal from '../modals/OfferActionModal'

// this is component will be responsible to handle the action to accept or reject on an open offer
class OfferAction extends React.Component {

  constructor() {
    super()
    this.state = {
      option: null
    }

    this.handleAction = this.handleAction.bind(this)
  }

  
  // handle the confirmation to accept to decline the offer
  handleAction({ target: { name } }){
    this.setState({ option: name })
  }


  render() {
    const { offer, toggleMessage, handleConfirm } = this.props
    return (
      <>
        <OfferActionModal offer={offer} story={offer.story}/>
        <p className="text-center">Received offer: <span className="text-bold h4">{offer.offerPrice} JC</span></p>
        <div className="h-center">
          <a href="#offerActionModal">
            <button className="btn bg-success input-group-btn" type="button" onClick={handleConfirm.bind(this,offer,'accept')} value="accept">Accept</button>
            <button className="btn bg-primary input-group-btn" type="button" onClick={handleConfirm.bind(this,offer,'reject')} value="reject">Reject</button>
          </a>
          {/* <button className="btn bg-warning input-group-btn" name="counter">Counter</button> */}
        </div>
        <div className="vertical-margin h-padding v-margin h-center">
          
          <button className="btn bg-gray tooltip tooltip-bottom v-center" data-tooltip="Show/Hide messages" onClick={toggleMessage}>
            <i className="icon icon-2x icon-mail"/>Messages
          </button>
          
        </div>
      </>
    )
  }
}

export default OfferAction