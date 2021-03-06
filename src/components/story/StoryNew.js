import React from 'react'
import axios from 'axios'
import User from '../../lib/auth'
import StoryForm from './StoryForm'



class StoryNew extends React.Component {
  constructor() {

    super()
    this.state = {
      data: {
        title: '',
        description: '',
        minimumPrice: '',
        contentLink: '',
        category: 'audio',
        image1: '',
        image2: '',
        image3: ''

      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange(e) {
    const data = { ... this.state.data, [e.target.id]: e.target.value }
    this.setState({ data })

  }

  handleSubmit() {

    const { title, description, minimumPrice, contentLink, category, image1, image2, image3 } = this.state.data
    const sendData = {
      title, description, minimumPrice, contentLink, category,
      image: [image1, image2, image3].filter(i => i)
    }

    axios.post('/api/stories', sendData, {
      headers: { Authorization: `Bearer ${User.getToken()}` }
    })
      .then(() => this.props.history.push('/stories'))
      .catch(err => console.error(err))
  }

  render() {
    const data = this.state.data
    return (
      <StoryForm
        {...data}
        formHeading="New story"
        submitBtnName="Create story"
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    )
  }
}


export default StoryNew