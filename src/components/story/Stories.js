import React from 'react'
import axios from 'axios'
// import queryString from 'query-string'

// local import
import Story from './Story'
import Auth from '../../lib/auth'


class Stories extends React.Component {
  constructor() {
    super()

    this.state = {
      allStories: null,
      storiesWithOffer: null // get all the stories that the current user is the buyer
    }

  }

  componentDidMount() {
    // const params = queryString.parse(this.props.location.search)
    console.log(this.props.location.search)
    axios.get(`/api/stories${this.props.location.search}`)
      .then(res => {
        this.setState({ allStories: res.data })
        return res.data
      })
      .then(stories => {
        // now query all the offers for all the stories that are displayed and map all the buyers of each story
        this.queryOffers(stories)
      })
      .catch(err => console.log(err))
  }

  // whatever the stories that was queried we need to get and see all the offers for those stories
  // this way we know whether the current user (logged or not) has anything to do with the story
  queryOffers(stories){

    if (stories.length === 0) return this.setState({ storiesWithOffer: {} })

    axios.get(`/api/offers?story=${stories.map( story => story._id)}`)
      .then(res => {
        const test = res.data.reduce((acc,offer) => {
          if (!acc[offer.story._id]) {
            acc[offer.story._id] = []
          }

          acc[offer.story._id].push(offer.buyer._id)
          return acc
        }, {})

        this.setState({ storiesWithOffer: test })
      })
  }

  render() {
    const { allStories, storiesWithOffer } = this.state
    if (!allStories || !storiesWithOffer) return <div className="loading loading-lg"></div>
    return (
      <section className="container">
        {allStories.length === 0 && <h2 className="h2 text-center">No juicy stories found 🥺</h2>}
        {allStories.map( story=> (
          <Story key={story._id} story={story} isCurrentUserBuyer={storiesWithOffer[story._id] || storiesWithOffer[story._id].includes(Auth.getPayload().sub)}/>
        ))}
      </section>
    )
  }

}



export default Stories