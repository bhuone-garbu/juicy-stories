import React from 'react'
import StoryCard from '../story/StoryCard'
import OfferAction from './OfferAction'
import MessagesCard from './MessagesCard'


class OfferRequestCard extends React.Component {
  constructor() {
    super()
    this.state = {
      showMessages: false
    }

    this.toggleMessage = this.toggleMessage.bind(this)
  }


  toggleMessage(){
    this.setState({ showMessages: !this.state.showMessages })
  }


  render() {
    const { offer, handleConfirm } = this.props
    const { showMessages } = this.state
    return (
      <article key={offer._id} className="column box-shadow v-margin">
        <div className="columns">
          <div className="column col-md-12 col-8">
            <StoryCard {...offer.story} postedBy={offer.seller} />
          </div>
          <div className="column col-md-12 col-4 v-center h-center flex-column text-right">
            <OfferAction offer={offer} toggleMessage={this.toggleMessage} handleConfirm={handleConfirm} />
          </div>
          <div className="column">
            {showMessages && <MessagesCard offerId={offer._id} />}
          </div>
        </div>
      </article>
    )
  }
}

export default OfferRequestCard
