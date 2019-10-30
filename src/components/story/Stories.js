import React from 'react'
import axios from 'axios'

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
        // now query all the offers for all the stories that are displayed and map all the buyers of each story
        axios.get(`/api/offers?story=${this.state.allStories.map( story => story._id)}`)
          .then(res => {
            const test = res.data.reduce((acc,offer) => {
              if (!acc[offer.story._id]) acc[offer.story._id] = []
              acc[offer.story._id].push(offer.buyer._id)
              return acc
            }, {})
            this.setState({ storiesWithOffer: test })
          })
      })
  }

  render() {
    const { allStories, storiesWithOffer } = this.state
    if (!allStories || !storiesWithOffer) return <div className="loading loading-lg"></div>
    return (
      <section className="container">
        {allStories.map( story=> (
          <Story key={story._id} story={story} isCurrentUserBuyer={storiesWithOffer[story._id].includes(Auth.getPayload().sub)}/>
        ))}
      </section>
    )
  }

}



export default Stories