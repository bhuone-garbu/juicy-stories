import React from 'react'

import Helper from '../../lib/helper'
import OfferFromModal from '../modals/OfferFormModal'

// this component will be context aware to display - buy or sell option
// depending on who the user is logged in
// this can be used with story detail and attached next to it.
class StoryAction extends React.Component {
  constructor() {
    super()
    this.state = {
      isOwner: false
    }
    
  }

  componentDidMount() {
    // this is the user id from the mongoose database
    const { story } = this.props.story
    this.setState({ isOwner: Helper.isUserOwner(story) })
  }


  render() {
    const { story } = this.props
    const { isOwner } = this.state
    return (
      <div className="flex-column v-center">
        {!isOwner &&
          <>
            <p>Minium accepted price</p>
            <h3 className="inline-block h3">{story.minimumPrice} JC</h3>
            {/* <a className="btn btn-primary" href="#example-modal-2">Open small size Modal</a> */}
            <a href={`#modal${story._id}`}><button className="btn bg-secondary input-group-btn">Make an offer</button></a>
            <OfferFromModal story={story}/>
          </>
        }
        {isOwner &&
          <>
            <i className="h3 inline-block icon icon-link icon-3x" />
            <p>Navigate to content</p>
          </>
        }
        

      </div>
    )
  }
}

export default StoryAction