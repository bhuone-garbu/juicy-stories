import React from 'react'

import Auth from '../lib/auth'
import Helper from '../lib/helper'

// this component will be context aware to display - buy or sell option
// depending on who the user is logged in
// this can be used with story detail and attached next to it.
class StoryAction extends React.Component {
  constructor() {
    super()
    this.state = {
      isOwner: false
    }
    this.currentUserId = Auth.getPayload().sub
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
            <h3 className="inline-block h3">{story.minimumPrice}</h3>
            <button className="btn bg-secondary input-group-btn">Make an offer</button>
          </>
        }
        {isOwner &&
          <>
            <i className="h3 inline-block icon icon-link icon-3x"/>
            <p>Navigate to content</p>
          </>
        }

      </div>
    )
  }
}

export default StoryAction