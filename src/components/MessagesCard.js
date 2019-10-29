import React from 'react'
import axios from 'axios'

import Auth from '../lib/auth'


class MessagesCard extends React.Component {
  constructor() {
    super()

    this.state = {
      messages: []

    }
  }

  componentDidMount() {
    axios.get(`/api/offers/${this.props.match.params.id}/messages`, { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
      .then(res => {
        this.setState({ messages: res.data })
      })
  }

  render() {
    const messages = this.state.messages

    if (messages === 0) return <div className="loading loading-lg"></div>
    return (
      <div>
        <section>
          <div className="column col-6 col-xs-12">
            <div className="panel">
              <div className="panel-header">Messages</div>
              <div className="panel-body">
                {!messages && <div className="loading loading-lg"></div>}
                {messages &&
                  messages.map(message => (
                    <div className="tile" key={message._id}>
                      <div className="tile-icon">
                        <figure className="avatar">
                          <img src="https://picturepan2.github.io/spectre/img/avatar-2.png"></img>
                        </figure>
                      </div>
                      <div className="tile-content">
                        <p className="tile-title text-bold">System Admin</p>
                        <div>{message.text}</div>
                      </div>
                    </div>
                  ))}
                <br></br>
                <div className="input-group">
                  <input className="form-input" type="text" placeholder="Hello"></input>
                  <button className="btn btn-primary input-group-btn">Send</button>
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