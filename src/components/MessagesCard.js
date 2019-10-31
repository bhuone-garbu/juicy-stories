import React from 'react'
import axios from 'axios'

import Auth from '../lib/auth'


class MessagesCard extends React.Component {
  constructor() {
    super()

    this.state = {
      data: null,
      value: '',
      isUpdated: false
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSend = this.handleSend.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/offers/${this.props.offerId}/messages`, { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
      .then(res => {
        this.setState({ data: res.data })
      })
  }


  handleSend() {
    axios.post(`/api/offers/${this.props.offerId}/messages`, {
      'text': this.state.value
    }, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState( { data: res.data.message, value: '' }))
      .catch(err => console.error(err))
  }


  handleChange(e) {
    this.setState({ value: e.target.value })
  }


  render() {
    const messages = this.state.data
    const value = this.state.value
    return (
      <div>
        <section>
          <div className="column col-12 p-centered col-xs-12">
            <div className="panel">
              <div className="panel-header text-bold">Messages</div>
              <div className="panel-body" style={ { 'overflowY': 'scroll', 'height': '150px' } }>
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
                        <p className="tile-title text-bold">{message.user.firstName} {message.user.lastName}</p>
                        <p className="tile-subtitle">{message.text}</p>
                      </div>
                    </div>
                  ))}
                <br></br>
              </div>
              <div className="panel-footer">
                <div className="input-group">
                  <input onChange={this.handleChange} value={value} className="form-input" id="messageSend" type="text" placeholder="Hello" ></input>
                  <button className="btn btn-primary input-group-btn" onClick={this.handleSend}>Send</button>
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