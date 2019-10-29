import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'


class SalesCard extends React.Component {
  constructor() {
    super()

    this.state = {
      offers: []
    }
  }

  componentDidMount() {
    axios.get('/api/offers', { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
      .then(res => this.setState({ offers: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    const offers = this.state.offers
    
    if (offers.length === 0) return <div className="loading loading-lg"></div>
    return (
      <div>
        <section>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Story</th>
                <th>Price</th>
                <th>Buyer</th>
                <th>Date Of Purchase</th>
              </tr>
            </thead>
            <tbody>
              {!offers && <div className="loading loading-lg"></div>}
              {offers &&
                offers.map(offer => (
                  <tr key={offer._id}>
                    <td>{offer.story.title}</td>
                    <td >{offer.offerPrice}</td>
                    <td>{offer.buyer.firstName} {offer.buyer.lastName}</td>
                    <td>{offer.createdAt}</td>
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