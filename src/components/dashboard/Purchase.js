import React from 'react'
import axios from 'axios'

import StoryCard from '../story/StoryCard'
import StoryAction from '../story/StoryAction'

class Purchase extends React.Component {
  constructor() {
    super()
    this.state = {
      stories: null
    }
  }


  componentDidMount(){
    // just faking with the timeout so that it's not too responsive
    axios.get('/api/stories')
      .then(response => this.setState({ stories: response.data }))
      .catch(err => console.log(err))
    
  }


  handleClick(e) {
    this.setState({ selected: e.target.name })
  }


  render() {
    const { stories } = this.state
    if (!stories) return <div className="loading loading-lg"></div>
    return (
      stories.map( story=> (
        <article key={story._id} className="columns bg-gray box-shadow v-margin">
          <div className="column col-9">
            <StoryCard { ...story }/>
          </div>
          <div className="column col-3 v-center h-center">
            <StoryAction story={story}/>
          </div>

        </article>
      ))
    )
  }
}

export default Purchase