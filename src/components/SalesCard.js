import React from 'react'
import axios from 'axios'

import Auth from '../lib/Auth'


class SalesCard extends React.Component {
  constructor() {
    super()

    this.state = {
      Data: []

    }
  }

  componentDidMount() {
    axios.get('/api/offers', { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
      .then(res => {

        const Data = res.data

        this.setState({ Data: Data })
      })
  }

  render() {
    console.log('state', this.state.Data)
    const offer = this.state.Data
    console.log('offer', offer)
    
    if (this.state.Data.length === 0) return <div className="loading loading-lg"></div>
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
              {!this.state.Data && <div className="loading loading-lg"></div>}
              {this.state.Data &&
                this.state.Data.map(offer => (
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