import React from 'react'
import axios from 'axios'

import StoryCard from '../story/StoryCard'
import StoryAction from '../story/StoryAction'
import Auth from '../../lib/auth'

class Purchase extends React.Component {
  constructor() {
    super()
    this.state = {
      offers: null,
      totalAmount: 0
    }
  }


  componentDidMount(){
    // just faking with the timeout so that it's not too responsive
    axios.get(`/api/offers?buyer=${Auth.getPayload().sub}`)
      .then(response => {
        const offers = response.data
        const totalAmount = offers.reduce((sum, offer) => sum += offer.offerPrice, 0)
        this.setState({ offers, totalAmount })
      })
      .catch(err => console.log(err))
  }


  handleClick(e) {
    this.setState({ selected: e.target.name })
  }


  render() {
    const { offers, totalAmount } = this.state
    if (!offers) return <div className="loading loading-lg"></div>
    if (offers.length === 0 ) return <h2 className="h2 text-center v-margin">You have not purchased anything</h2>
    return (
      <section>
        <div className="text-center v-margin">
          <h3 className="h3">Total amount spent: <span className="text-bold">{Number(totalAmount).toFixed(2)}&nbsp;JC</span></h3>
        </div>
        {offers.map( offer=> (
          <article key={offer._id}>
            <div className="columns bg-gray box-shadow v-margin">
              <div className="column col-md-12 col-9">
                <StoryCard { ...offer.story } postedBy={offer.seller}/>
              </div>
              <div className="column col-md-12 col-3 v-center h-center">
                <StoryAction story={offer.story} isCur3entUserBuyer={true}/>
              </div>
              <div className="column">
                <h4 className="h4">Price paid: <span className="text-bold">{Number(offer.offerPrice).toFixed(2)}&nbsp;JC</span></h4>
              </div>
            </div>
          </article>
        ))}
          
      </section>
    )
  }
}

export default Purchase