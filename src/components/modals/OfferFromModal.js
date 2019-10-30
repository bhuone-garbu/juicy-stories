import React from 'react'

import StoryCard from '../story/StoryCard'

// This is the form we will use to create offer to story
class OfferFromModal extends React.Component {

  constructor() {
    super()

    this.state = {
      askConfirm: false
    }
  }

  render() {
    const story = this.props.story
    return (

      <div className="modal" id={`modal${story._id}`}>
        <a className="modal-overlay" aria-label="Close"></a>
        <div className="modal-container" role="document">
          <div className="modal-header"><a className="btn btn-clear float-right" href="#modals-sizes" aria-label="Close"></a>
            <div className="modal-title h4">Make an offer to the seller</div>
          </div>
          <form>
            <div className="modal-body">
              <StoryCard {...story} />
              <div className="form-group">
                <label className="form-label" htmlFor="offerPrice">Price (JC)</label>
                <input className="form-input" id="offerPrice" type="number" step="5"/>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary">Submit</button><a className="btn btn-link" href="#modals-sizes" aria-label="Close">Close</a>
            </div>
          </form>
        </div>

      </div>
    )
  }
}

export default OfferFromModal