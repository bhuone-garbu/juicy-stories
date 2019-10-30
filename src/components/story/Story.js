import React from 'react'

import StoryCard from './StoryCard'
import StoryAction from './StoryAction'

// this is wrapper to hold and control all the components related to a story - one story
class Story extends React.Component {


  handleClick({ target: { name, value } }){

  }
  
  render(){
    const { story, isCurrentUserBuyer } = this.props
    return (
      <article key={story._id}>
        <div className="columns bg-gray box-shadow v-margin">
          <div className="column col-9">
            <StoryCard { ...story }/>
          </div>
          <div className="column col-3 v-center h-center">
            <StoryAction story={story} isCurrentUserBuyer={isCurrentUserBuyer}/>
          </div>
        </div>
      </article>
    )
  }
}

export default Story
