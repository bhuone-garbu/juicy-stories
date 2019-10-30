import React from 'react'
import axios from 'axios'
import StoryCard from './StoryCard'
import StoryAction from './StoryAction'
// import MessageCard from '../../components/MessagesCard'

// local import
import Story from './Story'


class Stories extends React.Component {
  constructor() {
    super()

    this.state = {
      stories: null
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
      <section className="container">
        {stories.map( story=> (<Story key={story._id} story={story}/>))}
      </section>
    )
  }

}



export default Stories