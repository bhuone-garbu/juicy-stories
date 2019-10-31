import React from 'react'

class OfferAction extends React.Component {

  constructor() {
    super()
    this.state = {
      confirmAccept: false,
      confirmReject: false
    }
  }

  // handle the 
  handleAction({ target: { name } }){
    this.setState({ ...this.state, [name]: true })
  }


  render() {
    const { offer } = this.props
    return (
      <>
        <p className="text-center">Received offer: <span className="text-bold h4">{offer.offerPrice} JC</span></p>
        <div className="h-center">
          <button className="btn bg-success input-group-btn" name="accept">Accept</button>
          <button className="btn bg-primary input-group-btn" name="reject">Reject</button>
          <button className="btn bg-warning input-group-btn" name="counter">Counter</button>
        </div>
        <div className="vertical-margin h-padding v-margin h-center">
          
          <button onClick={this.props.handleClick}>
            <i className="icon icon-2x icon-mail"/>Messages
          </button>
          
        </div>
      </>
    )
  }
}

export default OfferAction