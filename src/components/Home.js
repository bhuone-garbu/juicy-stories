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

        const topStories = res.data
        // const topStories = res.data.slice(res.data.length - 3)
        // console.log(topStories)
        this.setState({ topStories: topStories })
      })
  }

  render() {
    console.log('state', this.state.topStories)
    const story = this.state.topStories
    console.log('story', story[0])

    if (this.state.topStories.length === 0) return <div className="loading loading-lg"></div>
    return (
      <div>
        <section>
          {!story[0]}
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
            <div className="column panel">
              <div className="panel-header">
                <div className="panel-title h4 text-center">Top Stories</div>
              </div>
              <div className="panel-body">

                <div className="card column" key={story[0]._id}>
                  <a href={story[0].url} target="blank">
                    <div className="card-header">
                      <div className="card-title h5">{story[0].title}</div>
                      <div className="card-subtitle text-gray">{story[0].description}</div>
                    </div>
                    <div className="card-image">
                      <img src="https://ichef.bbci.co.uk/news/660/cpsprodpb/CBCE/production/_109447125_ukparliament_jessicataylor-7.jpg" className="img-responsive" alt="article image"></img>
                    </div>
                  </a>
                </div>
                <div class="columns col-gapless">
                  <div className="card column col-6" key={story[1]._id}>
                    <a href={story[1].url} target="blank">
                      <div className="card-header">
                        <div className="card-title h5">{story[1].title}</div>
                        <div className="card-subtitle text-gray">{story[1].description}</div>
                      </div>
                      <div className="card-image">
                        <img src="https://ichef.bbci.co.uk/news/270/cpsprodpb/1545D/production/_109433178_bus1000.jpg" className="img-responsive" alt="article image"></img>
                      </div>
                    </a>
                  </div>
                  <div className="card column col-6" key={story[2]._id}>
                    <a href={story[2].url} target="blank">
                      <div className="card-header">
                        <div className="card-title h5">{story[2].title}</div>
                        <div className="card-subtitle text-gray">{story[2].description}</div>
                      </div>
                      <div className="card-image">
                        <img src="https://ichef.bbci.co.uk/news/270/cpsprodpb/10A29/production/_109373186_annie.jpg" className="img-responsive" alt="article image"></img>
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


      </div>
    )
  }



}
export default Home