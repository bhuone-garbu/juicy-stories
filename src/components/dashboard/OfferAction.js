import React from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from "react-dom"
import MessagesCard from '../MessagesCard'

class OfferAction extends React.Component {

  constructor() {
    super()
    this.state = {
      isActive: true
    }
  }


  render() {
    return (
      <>
        <div className="h-center">
          <button className="btn bg-success input-group-btn">Accept</button>
          <button className="btn bg-primary input-group-btn">Reject</button>
          <button className="btn bg-warning input-group-btn">Counter</button>
        </div>
        <div className="vertical-margin h-padding v-margin h-center">
          
          <button onClick={this.props.handleClick}
          >
            <i className="icon icon-2x icon-mail"/>Messages
          </button>
          
        </div>
      </>
    )
  }
}

export default OfferAction