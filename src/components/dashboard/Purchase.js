import React from 'react'

const Purchase = ({ title, description }) => {

  return (
    <div className="columns">

      {/* this will be section for displaying the image/video of the content */}
      <div className="column col-3 bg-gray">
        <figure className="figure">
          <img className="img-responsive" src="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg"
            alt="macOS Yosemite Wallpaper"/>
          <figcaption className="figure-caption text-center">macOS Yosemite wallpaper</figcaption>
        </figure>
      </div>
      <div className="column col-6">
        <h2 className="title h4 text-left">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="column col-3">
        <button className="btn bg-secondary input-group-btn">Buy</button>
        <button className="btn bg-primary input-group-btn">Sell</button>
      </div>
    </div>
  )
}

export default Purchase