import React from 'react'

const StoryCard = ({ title, description }) => {

  return (
    <div className="columns vertical-margin top-padding box-shadow">

      {/* this will be section for displaying the image/video of the content */}
      <div className="column col-4">
        <figure className="figure">
          <img className="img-responsive" src="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg"
            alt="macOS Yosemite Wallpaper"/>
        </figure>
      </div>
      <div className="column col-8 horizontal-padding">
        <h2 className="title h2 text-left">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default StoryCard