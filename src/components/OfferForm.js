import React from 'react'

import StoryCard from './StoryCard'

// This is the form we will use to create offer to story
class OfferFrom extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  render(){
    const { story } = this.props
    return (
      <>
        <StoryCard { ...story }/>
      </>
    )
  }
}

export default OfferFrom