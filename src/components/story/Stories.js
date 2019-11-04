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
      storiesWithOffer: {}, // get all the stories that the current user is the buyer,
      allLoaded: false
    }

  }

  componentDidUpdate(prevProps) {
    // console.log(this.props.location.search)
    if (this.props.location.search !== prevProps.location.search) {
      this.setState({ allLoaded: false })
      setTimeout(() => this.refresh(), 300) // faking it with the timeout because it is too quick lol - 🤫
    }
  }

  refresh() {
    // const params = queryString.parse(this.props.location.search)
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

  componentDidMount() {
    this.refresh()
  }

  // whatever the stories that was queried we need to get and see all the offers for those stories
  // this way we know whether the current user (logged or not) has anything to do with the story
  queryOffers(stories) {

    if (stories.length === 0) return this.setState({ storiesWithOffer: {}, allLoaded: true })

    axios.get(`/api/offers?story=${stories.map(story => story._id)}`)
      .then(res => {
        const storiesWithOffer = res.data.reduce((acc, offer) => {
          if (!acc[offer.story._id.toString()]) {
            acc[offer.story._id.toString()] = []
          }

          acc[offer.story._id.toString()].push(offer.buyer._id)
          return acc
        }, {})

        this.setState({ storiesWithOffer, allLoaded: true })
      })
  }

  render() {
    if (!this.state.allLoaded) return <div className="loading loading-lg"></div>
    const { allStories, storiesWithOffer } = this.state
    return (
      <section className="container">
        {allStories.length === 0 && <h2 className="h2 text-center v-margin">No juicy stories found 🥺</h2>}
        {allStories.map(story => (
          <div key={story._id} className="column bg-gray box-shadow v-margin">
            <Story story={story}
              isCurrentUserBuyer={storiesWithOffer[story._id] && storiesWithOffer[story._id].includes(Auth.getPayload().sub)} />
          </div>
        ))}
      </section>
    )
  }

}


export default Stories