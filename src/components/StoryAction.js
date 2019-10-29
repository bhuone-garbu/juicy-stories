import React from 'react'

import Auth from '../lib/auth'

// this component will be context aware to display - buy or sell option
// depending on who the user is logged in
// this can be used with story detail and attached next to it.
class StoryAction extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    // this is the user id from the mongoose database
    const currentUserId = Auth.getPayload().sub
  }


  render(){
    return (
      <h1>Hello world!</h1>
    )
  }
}

export default StoryAction