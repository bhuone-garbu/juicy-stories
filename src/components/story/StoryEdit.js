import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import StoryForm from './StoryForm'



class StoryEdit extends React.Component {
  constructor() {

    super()
    this.state = {
      data: {
        title: '',
        description: '',
        minimumPrice: '',
        contentLink: '',
        category: '',
        image1: '',
        image2: '',
        image3: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // getting data to display for edit
  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`/api/stories/${id}`)
      .then(res => {
        const { title, description, minimumPrice, contentLink, category } = res.data
        const dataCopy = { ...this.state.data, title, description, minimumPrice, contentLink, category }
        dataCopy.image1 = res.data.image[0] ? res.data.image[0] : ''
        dataCopy.image2 = res.data.image[1] ? res.data.image[1] : ''
        dataCopy.image3 = res.data.image[2] ? res.data.image[2] : ''
        this.setState({ data: dataCopy })

      })
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

    const id = this.props.match.params.id
    axios.put(`/api/stories/${id}`, sendData, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/stories'))
      .catch(err => console.error(err))
  }

  render() {

    const data = this.state.data

    return (
      <StoryForm
        {...data}
        formHeading="Edit story"
        submitBtnName="Update story"
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    )
  }
}


export default StoryEdit