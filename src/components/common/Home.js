import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo2.png'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      topStories: null // top three stories
    }
  }

  componentDidMount() {
    axios.get('/api/stories')
      .then(res => {
        const topStories = res.data.splice(0,3)
        this.setState({ topStories })
      })
  }

  render() {
    const stories = this.state.topStories
    if (!stories) return <div className="loading loading-lg"></div>

    return (
      <div className="container">
        <section className="columns">

          <article className="column col-6 col-sm-12 text-center v-margin">
            <h1 className="h1 move no-margin text-bold text-black">Unlimited</h1>
            <figure className="figure move">
              <img className="img-responsive inline-block" src={logo} width="350px" alt="logo"></img>
            </figure>
            <p className="h4">A marketplace to share/buy and sell juicy stories for a good price.</p>
            <Link to='/stories'>
              <button className="btn btn-primary">View all stories</button>
            </Link>
          </article>

          <article className="column col-6 col-sm-12 text-center v-margin">
            <div className="column text-center">
              <div className="card">
                <div className="card-image">
                  <img className="img-responsive" src={stories[0].image[0]}
                    alt="photo of some lady"/></div>
                <div className="card-header">
                  <div className="card-title h6 text-primary">{stories[0].title}</div>
                  <div className="card-subtitle text-gray">{stories[0].description}</div>
                </div>
              </div>
            </div>
            <div className="column text-center">
              <div className="columns col-gapless">
                <div className="column col-6 col-sm-12 card">
                  <div className="card-image">
                    <img className="img-responsive" src={stories[1].image[0]}
                      alt="photo of some lady"/></div>
                  <div className="card-header">
                    <div className="card-title h6 text-primary">{stories[1].title}</div>
                    <div className="card-subtitle text-gray">{stories[1].description}</div>
                  </div>
                </div>
                <div className="column col-6 col-sm-12 card">
                  <div className="card-image">
                    <img className="img-responsive" src={stories[2].image[0]}
                      alt="photo of some lady"/></div>
                  <div className="card-header">
                    <div className="card-title h6 text-primary">{stories[2].title}</div>
                    <div className="card-subtitle text-gray">{stories[2].description}</div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    )
  }



}
export default Home