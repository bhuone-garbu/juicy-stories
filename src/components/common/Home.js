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
      <section className="v-center hero-fullview ">
        <div className="columns">
          <div className="column col-md-12 panel text-center" >
            <div className="panel-header">
              <h1 className="h1 move no-margin text-bold text-black">Unlimited</h1>
              <figure className="figure move">
                <img className="img-responsive inline-block" src={logo} width="350px" alt="logo"></img>
              </figure>
            </div>
            <div className="panel-body ">
              <p>Text explaning what the site is doing and how we operate</p>
              <Link to='/stories'><button className="btn btn-primary"> To all Stories</button></Link>
            </div>
          </div>
          <div className="column col-md-12 panel">
            <div className="panel-header">
              <div className="panel-title h4 text-center">Top Stories</div>
            </div>
            <div className="panel-body">

              <div className="card column">
                <a href={stories[0].url} target="blank">
                  <div className="card-header">
                    <div className="card-title h5">{stories[0].title}</div>
                    <div className="card-subtitle text-gray">{stories[0].description}</div>
                  </div>
                  <div className="card-image">
                    <img src="https://ichef.bbci.co.uk/news/660/cpsprodpb/CBCE/production/_109447125_ukparliament_jessicataylor-7.jpg" className="img-responsive" alt="article image" />
                  </div>
                </a>
              </div>
              <div className="columns col-gapless">
                <div className="card column col-6">
                  <a href={stories[1].url} target="blank">
                    <div className="card-image">
                      <img src="https://ichef.bbci.co.uk/news/270/cpsprodpb/1545D/production/_109433178_bus1000.jpg" className="img-responsive" alt="article image" />
                    </div>
                    <div className="card-header">
                      <div className="card-title h5">{stories[1].title}</div>
                      <div className="card-subtitle text-gray">{stories[1].description}</div>
                    </div>
                  </a>
                </div>
                <div className="card column col-6">
                  <a href={stories[2].url} target="blank">
                    <div className="card-image">
                      <img src="https://ichef.bbci.co.uk/news/270/cpsprodpb/10A29/production/_109373186_annie.jpg" className="img-responsive" alt="article image" />
                    </div>
                    <div className="card-header">
                      <div className="card-title h5">{stories[2].title}</div>
                      <div className="card-subtitle text-gray">{stories[2].description}</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="tile">
                <div className="tile-icon">
                  <div className="panel-footer">
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    )
  }



}
export default Home