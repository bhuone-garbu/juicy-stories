import React from 'react'

import StoryCard from './StoryCard'
import StoryAction from './StoryAction'

// this is wrapper to hold and control all the components related to a story - one story
class Story extends React.Component {
  
  render(){
    const { story, isCurrentUserBuyer, postedBy = story.postedBy, offerStatus = 'OFFER_SENT' } = this.props
    return (
      <article key={story._id}>
        <div className="columns">
          <div className="column col-md-12 col-9">
            <StoryCard { ...story } postedBy={postedBy}/>
          </div>
          <div className="column col-md-12 col-3 v-center h-center">
            <StoryAction story={story} isCurrentUserBuyer={isCurrentUserBuyer} offerStatus={offerStatus}/>
          </div>
        </div>
      </article>
    )
  }
}

export default Story
