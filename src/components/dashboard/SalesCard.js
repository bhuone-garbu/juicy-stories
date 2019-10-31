import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'


class SalesCard extends React.Component {
  constructor() {
    super()

    this.state = {
      offers: [],
      salesAmount: 0
    }
  }

  componentDidMount() {
    axios.get(`/api/offers?seller=${Auth.getPayload().sub}`, { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
      .then(res => {
        const offers = res.data
        const salesAmount = offers.reduce((sum,offer) => sum += offer.offerPrice, 0)
        this.setState({ offers, salesAmount })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { offers, salesAmount } = this.state
    
    if (offers.length === 0) return <div className="loading loading-lg"></div>
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
                <th>Purchase date</th>
              </tr>
            </thead>
            <tbody>
              {!offers && <div className="loading loading-lg"></div>}
              {offers &&
                offers.map(offer => (
                  <tr key={offer._id}>
                    <td>{offer.story.title}</td>
                    <td><span className="text-bold">{Number(offer.offerPrice).toFixed(2)}</span>&nbsp;JC</td>
                    <td>{offer.buyer.firstName} {offer.buyer.lastName}</td>
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