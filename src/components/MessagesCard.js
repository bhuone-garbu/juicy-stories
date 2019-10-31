import React from 'react'
import axios from 'axios'

import Auth from '../lib/auth'


class MessagesCard extends React.Component {
  constructor() {
    super()

    this.myDiv = React.createRef()

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
    const JSONMessaage = {
      'text': this.state.value
    }
    axios.post(`/api/offers/${this.props.offerId}/messages`, JSONMessaage, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ data: res.data.message }))
      .catch(err => console.error(err))
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }


  render() {
    const messages = this.state.data
    console.log('data is',this.state.data)
    return (
      <div>
        <section>
          <div id="messageDiv" className="column col-6 p-centered col-xs-12">
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
                        <p className="tile-title text-bold">{message.user.firstName} {message.user.lastName}</p>
                        <div>{message.text}</div>
                      </div>
                    </div>
                  ))}
                <br></br>
                <div className="input-group">
                  <input onChange={this.handleChange} className="form-input" id="messageSend" type="text" placeholder="Hello" ></input>
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