import React from 'react'
import Helper from '../../lib/helper'

const StoryCard = ({ title, description, postedBy, category, options = {} }) => {


  return (
    <div className="columns top-padding">

      {/* this will be section for displaying the image/video of the content */}
      <div className="column col-sm-12 col-5">
        <figure className="figure">
          <img className="img-responsive" src="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg"
            alt="macOS Yosemite Wallpaper"/>
        </figure>
        <p>Content type: <span className="text-bold">{`${Helper.capitalizeFirstLetter(category)}`}</span></p>
      </div>
      <div className="column col-sm-12 col-7 horizontal-padding">
        <h2 className="title h3 text-left text-break">{title}</h2>
        <h3 className="h6 no-margin">Seller: <span className="text-bold text-primary">{postedBy.firstName} {postedBy.lastName}</span></h3>
      </div>
      <div className="top-margin">
        <p className="text-bold no-margin">Description</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default StoryCard