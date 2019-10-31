import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router' // need this to access the location history array object

import Auth from '../../lib/auth'
import StoryCard from '../story/StoryCard'

// This is the form we will use to create offer to story
class OfferFromModal extends React.Component {

  constructor() {
    super()

    this.state = {
      askConfirm: false,
      offerPrice: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)
  }


  handlePriceChange({ target: { name, value } }){
    this.setState({ ...this.state, [name]: value, askConfirm: false })
  }

  componentDidMount(){
    this.setState({ offerPrice: this.props.story.minimumPrice })
  }
  
  handleSubmit(e){
    const name = e.target.name // intentionally not decontructing because need to prevent the page reload
    if (name === 'confirm' ) this.setState({ askConfirm: true })
    if (name === 'submit') this.submitAnOffer(e)
  }
  
  
  submitAnOffer(e) {
    e.preventDefault()
    const { story: { postedBy }, handleOfferSubmit } = this.props
    axios.post('/api/offers', {
      offerPrice: this.state.offerPrice,
      seller: postedBy,
      story: this.props.story._id,
      buyer: Auth.getPayload().sub //seller becomes the current logged in user
    }, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => {
        handleOfferSubmit()
        this.props.history.go(-1)
      })
      .catch(err => console.error(err))
  }


  render() {
    const story = this.props.story
    const { askConfirm, offerPrice } = this.state

    return (
      <div className="modal" id={`modal${story._id}`}>
        <a className="modal-overlay" aria-label="Close"></a>
        <div className="modal-container" role="document">
          <div className="modal-header"><a className="btn btn-clear float-right" href="#" aria-label="Close"></a>
            <div className="modal-title h4">Make an offer to buy this content</div>
          </div>
          <form>
            <div className="modal-body">
              <StoryCard {...story} />
              <div className="form-group">
                <label className="form-label" htmlFor="offerPrice">Price (JC)</label>
                <input className="form-input" id="offerPrice" type="number" step="5" name="offerPrice"
                  value={offerPrice} placeholder="your price offer" onChange={this.handlePriceChange}/>
              </div>
            </div>
            <div className="modal-footer">
              {!askConfirm && <button className="btn bg-warning" name="confirm" type="button" onClick={this.handleSubmit}>
                <i className="icon icon-check"/>Confirm</button>}
              {askConfirm && <button className="btn btn-primary" name="submit" type="submit" onClick={this.handleSubmit}>
                <i className="icon icon-mail"/>Submit</button>}
              <a className="btn btn-link" href="#" aria-label="Close">Close</a>
            </div>
          </form>
        </div>

      </div>
    )
  }
}

export default withRouter(OfferFromModal)