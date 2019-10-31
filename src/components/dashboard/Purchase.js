import React from 'react'
import axios from 'axios'

import StoryCard from '../story/StoryCard'
import StoryAction from '../story/StoryAction'
import Auth from '../../lib/auth'

class Purchase extends React.Component {
  constructor() {
    super()
    this.state = {
      offers: null
    }
  }


  componentDidMount(){
    // just faking with the timeout so that it's not too responsive
    axios.get(`/api/offers?buyer=${Auth.getPayload().sub}`)
      .then(response => this.setState({ offers: response.data }))
      .catch(err => console.log(err))
  }


  handleClick(e) {
    this.setState({ selected: e.target.name })
  }


  render() {
    const { offers } = this.state
    if (!offers) return <div className="loading loading-lg"></div>
    return (
      offers.map( offer=> (
        <article key={offer.story._id} className="columns bg-gray box-shadow v-margin">
          <div className="column col-md-12 col-9">
            <StoryCard { ...offer.story } postedBy={offer.seller}/>
          </div>
          <div className="column col-md-12 col-3 v-center h-center">
            <StoryAction story={offer.story} isCurrentUserBuyer={true}/>
          </div>

        </article>
      ))
    )
  }
}

export default Purchase