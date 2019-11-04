import React from 'react'
import Helper from '../../lib/helper'
import noImage from '../../assets/no-image.jpg'

const StoryCard = ({ title, description, postedBy, category, image }) => {

  const hasImage = image && image.length > 0

  return (
    <div className="columns top-padding">

      {/* this will be section for displaying the image/video of the content */}
      <div className="column col-sm-12 col-5">
        <figure className="figure">
          <img className="img-responsive" src={hasImage ? image[0] : noImage}
            alt="macOS Yosemite Wallpaper"/>
        </figure>
        
      </div>
      <div className="column col-sm-12 col-7">
        <h2 className="title h3 text-left text-break">{title}</h2>
        {/* {(postedBy && postedBy.firstName) && */}
        <h3 className="h6 no-margin">Seller: <span className="text-bold text-primary">{postedBy.firstName} {postedBy.lastName}</span></h3>
        {/* } */}
        <p>Content type: <span className="text-bold">{`${Helper.capitalizeFirstLetter(category)}`}</span></p>
        <div className="top-margin">
          <p className="text-bold no-margin">Description</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default StoryCard