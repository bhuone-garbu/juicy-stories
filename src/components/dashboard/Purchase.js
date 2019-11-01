import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'
import Story from '../story/Story'

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
        const offers = response.data.filter(offer => offer.seller._id !== Auth.getPayload().sub)

        const totalAmount = offers
          .filter(offer => offer.status === 'ACCEPTED')
          .reduce((sum, offer) => sum += offer.offerPrice, 0)

        this.setState({ offers, totalAmount })
      })
      .catch(err => console.log(err))
  }


  handleClick(e) {
    this.setState({ selected: e.target.name })
  }


  render() {
    const { offers, totalAmount } = this.state
    console.log(offers)
    console.log(Auth.getPayload().sub)

    if (!offers) return <div className="loading loading-lg"></div>
    if (offers.length === 0 ) return <h2 className="h2 text-center v-margin">You have not purchased anything</h2>
    return (
      <section>
        <div className="text-center v-margin">
          <h3 className="h3">Total amount spent: <span className="text-bold">{Number(totalAmount).toFixed(2)}&nbsp;JC</span></h3>
        </div>
        {offers.map( offer=> (
          <div key={offer._id} className="column box-shadow v-margin">
            <Story story={offer.story} postedBy={offer.seller} isCurrentUserBuyer={true} offerStatus={offer.status}/>
            <div className="column">
              <h4 className="h4">Offer price: <span className="text-bold">{Number(offer.offerPrice).toFixed(2)}&nbsp;JC</span></h4>
            </div>
          </div>
        ))}
          
      </section>
    )
  }
}

export default Purchase