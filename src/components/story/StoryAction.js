import React from 'react'

import Helper from '../../lib/helper'
import OfferFromModal from '../modals/OfferFormModal'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

// this component will be context aware to display - buy or sell option
// depending on who the user is logged in
// this can be used with story detail and attached next to it.
class StoryAction extends React.Component {
  constructor() {
    super()
    this.state = {
      isOwner: false, 
      offerMade: false // flag to know if current user has already made the offer on the story or not
    }

    this.handleOfferSubmit = this.handleOfferSubmit.bind(this)
  }

  componentDidMount() {
    // this is the user id from the mongoose database
    const { story, isCurrentUserBuyer } = this.props
    this.setState({ isOwner: Helper.isUserOwner(story), offerMade: isCurrentUserBuyer })
  }

  // this is the event handler that will be thrown when the offer has been SUCCESSFULLY created from the modal
  handleOfferSubmit(){
    this.setState({ offerMade: true })
  }


  render() {
    const { story } = this.props
    const { isOwner, offerMade } = this.state
    return (
      <div className="flex-column v-center v-margin">
        {!isOwner &&
          <>
            {offerMade && <><i className="icon icon-2x icon-mail text-success"/>Offer sent</>}
            <Link to={`/stories/${story._id}/edit`}><button className="btn btn-warning" id="editBtn">Edit Story</button></Link>
            {!offerMade &&
              <>
                <p>Minium accepted price</p>
                <h3 className="inline-block h3">{story.minimumPrice} JC</h3>
                {/* <a className="btn btn-primary" href="#example-modal-2">Open small size Modal</a> */}

                {/* protecting the modal and rendering only if the user was logged in */}
                {Auth.isAuthenticated() && <OfferFromModal story={story} handleOfferSubmit={this.handleOfferSubmit}/>}
                
                {/* redirect to login if the user attempt to make an offer*/}
                <a href={Auth.isAuthenticated() ? `#modal${story._id}` : '/login'}>
                  <button className="btn bg-secondary input-group-btn">Make an offer</button>
                </a>
              </>
            }
          </>
        }
        {isOwner &&
          <>
            <i className="h3 inline-block icon icon-link icon-3x"/>
            <p>You own the story</p>
          </>
        }
      </div>
    )
  }
}

export default StoryAction