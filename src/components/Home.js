import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import logo from '../assets/logo2.png'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      topStories: []

    }
  }

  componentDidMount() {
    axios.get('/api/stories')
      .then(res => {
        let topStories = res.data
        if (topStories.length > 3) topStories = res.data.slice(res.data.length - 3)
        this.setState({ topStories })
      })
  }

  render() {

    const { topStories } = this.state
    return (
      <section>

        <div className="columns bg-gray">
          <div className="column panel col-6 text-center" >
            <div className="panel-header">
              <h1 className="h1">Unlimited</h1>
              <figure className="figure">
                <img className="img-responsive inline-block" src={logo} width="350px" alt="logo"></img>
              </figure>
            </div>
            <div className="panel-body ">
              <p>Text explaning what the site is doing and how we operate</p>
              <Link to='/stories'><button className="btn btn-primary"> To all Stories</button></Link>
            </div>
          </div>
          <div className="column panel col-6">
            <div className="panel-header">
              <div className="panel-title h4 text-center">Top Stories</div>
            </div>
            <div className="panel-body">
              {!topStories && <div className="loading loading-lg"></div>}
              {topStories && topStories.map(story => (
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
          </div>
        </div>

      </section>

    )
  }



}
export default Home