import React from 'react'
import axios from 'axios'
import StoryCard from './StoryCard'
import StoryAction from './StoryAction'
// import MessageCard from '../../components/MessagesCard'

// local import
import Story from './Story'
import Auth from '../../lib/auth'


class Stories extends React.Component {
  constructor() {
    super()

    this.state = {
      allStories: null,

      // get all the stories that the current user is the buyer
      storiesWithOffer: null
    }

  }

  componentDidMount() {
    axios.get('/api/stories')
      .then(res => {
        this.setState({ allStories: res.data })
        return res
      })
      .then(() => {
        // now query all the offers where the current logged in user is the buyer that made the offer
        axios.get(`/api/offers?buyer=${Auth.getPayload().sub}`)
          .then(res => {
            this.setState({ storiesWithOffer: res.data.map(offer => offer.story._id) })
          })
      })
  }

  render() {
    const { allStories, storiesWithOffer } = this.state
    console.log(this.state)
    if (!allStories || !storiesWithOffer) return <div className="loading loading-lg"></div>
    return (
      <section className="container">
        {allStories.map( story=> (
          <Story key={story._id} story={story} isCurrentUserBuyer={storiesWithOffer.includes(story._id)}/>
        ))}
      </section>
    )
  }

}



export default Stories