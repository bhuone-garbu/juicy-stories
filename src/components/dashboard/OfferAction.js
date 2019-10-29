import React from 'react'

class OfferAction extends React.Component {

  constructor(){
    super()
  }

  render(){
    return (
      <>
        <div>
          <button className="btn bg-success input-group-btn">Accept</button>
          <button className="btn bg-primary input-group-btn">Reject</button>
          <button className="btn bg-warning input-group-btn">Counter</button>
        </div>
        <div className="vertical-margin h-padding v-margin">
          <a href="#">
            <i className="icon icon-2x icon-mail"/>Messages</a>
        </div>
      </>
    )
  }
}

export default OfferAction