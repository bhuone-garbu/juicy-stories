import React from 'react'
import axios from 'axios'
import StoryCard from './StoryCard'
import StoryAction from './StoryAction'


class Stories extends React.Component {
  constructor() {
    super()

    this.state = {
      stories: []
    }

  }

  componentDidMount() {
    axios.get('/api/stories')
      .then(res => {
        this.setState({ stories: res.data })
      })
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



export default Stories