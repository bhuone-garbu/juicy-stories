import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'
import StoryAction from '../story/StoryAction'
import StoryCard from '../story/StoryCard'
import SalesCard from './SalesCard'


class MyStories extends React.Component {
  constructor() {
    super()

    this.state = {
      myStories: null
    }
  }

  componentDidMount() {
    axios.get(`/api/stories?postedBy=${Auth.getPayload().sub}`, { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
      .then(res => this.setState({ myStories: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    const { myStories } = this.state
    
    if (!myStories) return <div className="loading loading-lg"></div>
    if (myStories.length === 0 ) return <h2 className="h2 text-center v-margin">Your sales collection is empty</h2>
  
    return (
      <div>
        <section className="card">
          <SalesCard/>
        </section>
        <section>
          {myStories.map( story=> (
            <article key={story._id}>
              <div className="columns bg-gray box-shadow v-margin">
                <div className="column col-md-12 col-9">
                  <StoryCard { ...story }/>
                </div>
                <div className="column col-md-12 col-3 v-center h-center">
                  <StoryAction story={story} isCurrentUserBuyer={true}/>
                </div>
                <div className="column">
                  <h4 className="h4">Offer price: <span className="text-bold">{Number(story.minimumPrice).toFixed(2)}&nbsp;JC</span></h4>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    )
  }
}


export default MyStories