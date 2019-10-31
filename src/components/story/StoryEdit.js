import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import StoryForm from './StoryForm'



class StoryEdit extends React.Component {
  constructor(){

    super()
    this.state = {
      data: {
        title: '',
        description: '',
        minimumPrice: '',
        contentLink: '',
        status: '',
        category: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // getting data to display for edit
  componentDidMount(){
    const id = this.props.match.params.Id
    axios.get(`/api/stories/${id}`)
      .then(res => {
        this.setState({ data: res.data })
      })
    
  }


  handleChange(e) {
    // console.log(e.target.value)
    const data = { ... this.state.data, [e.target.id]: e.target.value }
    this.setState({ data })  
  }

  handleSubmit(){
    const Id = this.props.match.params.Id
    axios.put(`/api/stories/${Id}`, this.state.data ,{
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/stories'))
    
      .catch(err => console.error(err))
  }

  render(){
    const data = this.state.data
    
    return (
      <>
        
        <div className="card col-8 p-centered mt-2">
          <StoryForm
            { ...data }
          
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange} />
        </div>
      </>

      
    )
  }
}


export default StoryEdit