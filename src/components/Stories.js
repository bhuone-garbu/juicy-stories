import React from 'react'
import Axios from 'axios'


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
        const currentStories = res.data
        console.log(currentStories)
        this.setState({ stories: res.data })
      })
  }



  render() {
    console.log('state', this.state.stories)
    const data = this.state.stories
    return (
      <div>
        {!data && <div className="loading loading-lg"></div>}
        {data &&
          data.map(story => (
            <div className="card" key={story._id}>
              <a href={story.url} target="blank">
                <div className="card-header">
                  <div className="card-title h5">{story.title}</div>
                  <div className="card-subtitle text-gray">{story.description}</div>
                </div>
                <div className="card-image">
                  <img src={story.urlToImage} className="img-responsive" alt="article image"></img>
                </div>
              </a>
            </div>
          ))}

      </div>
    )
  }




}



export default Stories