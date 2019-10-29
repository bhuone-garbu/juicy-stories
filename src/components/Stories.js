import React from 'react'
import Axios from 'axios'
import StoryCard from './StoryCard'


class Stories extends React.Component {
  constructor() {
    super()

    this.state = {
      stories: []
    }

  }

  componentDidMount() {
    Axios.get('/api/stories')
      .then(res => {
        this.setState({ stories: res.data })
      })
  }

  render() {
    const data = this.state.stories
    console.log(data)
    return (
      <div>
        {!data && <div className="loading loading-lg"></div>}
        {data &&
          data.map(story => (
            <div className="card top-padding" key={story._id}>
              <a href={story.url} target="blank">
                <StoryCard {... story}/>
                <div className="text-right price h3">Min price :{story.minimumPrice} JC</div>
              </a> 
            </div>
          ))}

      </div>
    )
  }




}



export default Stories