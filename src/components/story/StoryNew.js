import React from 'react'
import axios from 'axios'
import User from '../../lib/auth'
import StoryForm from './StoryForm'



class StoryNew extends React.Component {
  constructor(){

    super()
    this.state = {
      data: {
        title: null,
        description: null,
        minimumPrice: null,
        contentLink: null,
        category: null,
        image1: null,
        image2: null,
        image3: null
        
        
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  
  handleChange(e) {
    const data = { ... this.state.data, [e.target.id]: e.target.value }
    this.setState({ data })  
    
    
  }

  handleSubmit(){

    const sendData = { 
      'title': this.state.data.title,
      'description': this.state.data.description,
      'minimumPrice': this.state.data.minimumPrice,
      'contentLink': this.state.data.contentLink,
      'category': this.state.data.category,
      'image': [this.state.data.image1,
        this.state.data.image2,
        this.state.data.image3 ]
            
    }
    axios.post('/api/stories', sendData ,{
      headers: { Authorization: `Bearer ${User.getToken()}` }
    })
      .then(() => this.props.history.push('/stories'))
    
      .catch(err => console.error(err))
  }

  render(){
    const data = this.state.data
    
    return (
      <>
        <div className="card mt-2 p-centered col-8" > <div className="h2 text-center bg-gray">Create New Story </div>

          <StoryForm
            { ...data }
          
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange} />
        </div>
      </>

      
    )
  }
}


export default StoryNew