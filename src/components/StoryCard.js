import React from 'react'

const StoryCard = ({ title, description }) => {

  return (
    <div className="columns col-gapless tab-container">

      {/* this will be section for displaying the image/video of the content */}
      <div className="column col-4 bg-gray">
        <figure className="figure">
          <img className="img-responsive" src="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg"
            alt="macOS Yosemite Wallpaper"/>
        </figure>
      </div>
      <div className="column col-8">
        <h2 className="title h2 text-left">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default StoryCard