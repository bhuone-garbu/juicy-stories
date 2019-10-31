import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo2.png'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      topStories: null
    }
  }

  componentDidMount() {
    axios.get('/api/stories')
      .then(res => {
        const topStories = res.data
        this.setState({ topStories: topStories })
      })
  }

  render() {
    const stories = this.state.topStories

    if (!stories) return <div className="loading loading-lg"></div>
    return (
      <div className="container">
        <section className="v-center columns">

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
              <h2 className="h4">Top Stories</h2>
              <div className="card">
                <div className="card-image">
                  <img className="img-responsive" src="https://cdn.vox-cdn.com/thumbor/3CLCd-YqNX4yul1wX4zOajKD8ss=/0x0:1280x720/1200x800/filters:focal(538x258:742x462)/cdn.vox-cdn.com/uploads/chorus_image/image/53091739/maxresdefault.0.jpg"
                    alt="photo of some lady"/></div>
                <div className="card-header">
                  <div className="card-title h6 text-primary">A Dog’s Purpose that appeared to show the film’s handlers forcing a distressed dog into a pool of water</div>
                  <div className="card-subtitle text-gray">The statement also explained that the dog, a German Shepherd named Hercules, had been “trained and conditioned” for his scenes, and that while he did show signs of distress, filming had stopped and that he “was not forced to swim in the water at any time.”</div>
                </div>
              </div>
            </div>
            <div className="column text-center">
              <div className="columns col-gapless">
                <div className="column col-6 col-sm-12 card">
                  <div className="card-image">
                    <img className="img-responsive" src="https://pbs.twimg.com/media/DuY9w2vXcAA4YDu.jpg"
                      alt="photo of some lady"/></div>
                  <div className="card-header">
                    <div className="card-title h6 text-primary">{stories[0].title}</div>
                    <div className="card-subtitle text-gray">{stories[0].description}</div>
                  </div>
                </div>
                <div className="column col-6 col-sm-12 card">
                  <div className="card-image">
                    <img className="img-responsive" src="https://img.apmcdn.org/3d6aaf1f7c3216276bb47e679f679aa5c9a7b17c/square/babe3a-20180821-fightclub8.jpeg"
                      alt="photo of some lady"/></div>
                  <div className="card-header">
                    <div className="card-title h6 text-primary">{stories[1].title}</div>
                    <div className="card-subtitle text-gray">{stories[1].description}</div>
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