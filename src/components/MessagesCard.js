import React from 'react'
import axios from 'axios'

import Auth from '../lib/Auth'


class MessagesCard extends React.Component {
  constructor() {
    super()

    this.state = {
      Data: []

    }
  }

  componentDidMount() {
    axios.get('/api/offers/5db85fbd9f66d20d1b0686a9/messages', { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
      .then(res => {

        const Data = res.data

        this.setState({ Data: Data })
      })
  }

  render() {
    console.log('state', this.state.Data)
    const message = this.state.Data
    console.log('message', message)

    if (this.state.Data.length === 0) return <div className="loading loading-lg"></div>
    return (
      <div>
        <section>
          <div className="column col-6 col-xs-12">
            <div className="panel">
              <div class="panel-header">Messages</div>
              <div className="panel-body">
                {!this.state.Data && <div className="loading loading-lg"></div>}
                {this.state.Data &&
                  this.state.Data.map(message => (
                    <div className="tile" key={message._id}>
                      <div className="tile-icon">
                        <figure className="avatar">
                          <img src="https://picturepan2.github.io/spectre/img/avatar-2.png"></img>
                        </figure>
                      </div>
                      <div className="tile-content">
                        <p class="tile-title text-bold">System Admin</p>
                        <div>{message.text}</div>
                      </div>
                    </div>
                  ))}
                <br></br>
                <div className="input-group">
                  <input class="form-input" type="text" placeholder="Hello"></input>
                  <button class="btn btn-primary input-group-btn">Send</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }



}
export default MessagesCard