import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'

// de-coupling the backend status with front end
const STATUS_MAP = {
  OFFER_SENT: 'Offer recieved', // 'received' because we are viewing the seller here
  ACCEPTED: 'Sold',
  REJECTED: 'Declined',
  CANCELLED: 'Cancelled'
}


class SalesCard extends React.Component {
  constructor() {
    super()

    this.state = {
      allOffers: null,
      salesAmount: 0
    }
  }

  componentDidMount() {
    axios.get(`/api/offers?seller=${Auth.getPayload().sub}`, { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
      .then(res => {
        const allOffers = res.data
        const acceptedOffers = allOffers.filter(offer => offer.status === 'ACCEPTED')
        let salesAmount = 0
        if (acceptedOffers.length > 0){
          salesAmount = acceptedOffers.reduce((sum, offer) => sum += offer.offerPrice, 0)
        }
        this.setState({ allOffers, salesAmount })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { allOffers, salesAmount } = this.state
    
    if (!allOffers) return <div className="loading loading-lg"></div>
    if (allOffers.length === 0 ) return <h2 className="h2 text-center v-margin">Your sales collection is empty</h2>
    return (
      <div>
        <div className="text-center v-margin">
          <h3 className="h3">Sales amount: <span className="text-bold">{Number(salesAmount).toFixed(2)} JC</span></h3>
        </div>
        <section>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Story</th>
                <th>Price</th>
                <th>Buyer</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {!allOffers && <div className="loading loading-lg"></div>}
              {allOffers &&
                allOffers.map(offer => (
                  <tr key={offer._id}>
                    <td>{offer.story.title}</td>
                    <td><span className="text-bold">{Number(offer.offerPrice).toFixed(2)}</span>&nbsp;JC</td>
                    <td>{offer.buyer.firstName} {offer.buyer.lastName}</td>
                    <td className="text-bold">{STATUS_MAP[offer.status]}</td>
                    <td>{new Date(offer.updatedAt).toLocaleDateString()}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}


export default SalesCard