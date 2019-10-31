import React from 'react'

// this is the form that will be used to edit/add story
const StoryForm = ({ title, description, contentLink, minimumPrice, category, handleSubmit, image1, image2, image3, handleChange, submitBtnName }) => (

  <section className="col-12">
    <div className="bg-gray">
      <div className="form-group p-centered col-10">
        <label className="form-label" htmlFor="title">Title</label>
        <input onChange={handleChange} className="form-input input-lg" value={title} type="text" id="title"
          placeholder="Something juicy"/>

        <label className="form-label" htmlFor="description">Description</label>
        <textarea onChange={handleChange} className="form-input input-lg" value={description} type="text" id="description"
          placeholder="This is the description (teaser) of what you have that you want to sell"
        />

        <label className="form-label" htmlFor="contentLink">Image url</label>
        <input onChange={handleChange} className="form-input input-lg" value={image1} type="url" id="image1"
          placeholder="Assume this is like an upload function"
        />

        <label className="form-label" htmlFor="contentLink">Image url</label>
        <input onChange={handleChange} className="form-input input-lg" value={image2} type="url" id="image2"
          placeholder="Assume this is like an upload function"
        />

        <label className="form-label" htmlFor="contentLink">Image url</label>
        <input onChange={handleChange} className="form-input input-lg" value={image3} type="url" id="image3"
          placeholder="Assume this is a upload function"
        />

        <label className="form-label" htmlFor="price">Minimum price</label>
        <input onChange={handleChange} className="form-input input-lg" value={minimumPrice} type="number" id="minimumPrice"
          placeholder="Minimum price you are expecting"
        />
        
        <label className="form-label" htmlFor="contentLink">Content Download link</label>
        <input onChange={handleChange} className="form-input input-lg" value={contentLink} id="contentLink"
          placeholder="Assume this is also another upload function for the actual .zip file content"
        />

        <label className="form-label" htmlFor="category">Category</label>
        <div className="form-group">
          <select onChange={handleChange} value={category} className="form-select" id="category">
            <option value="audio">Audio</option>
            <option value="video">Video</option>
            <option value="image">Image</option>
          </select>
        </div>
        <div className="card-footer text-center">
          <button onClick={handleSubmit} className="btn btn-error input-group-btn input-lg">
            <i className="icon icon-upload"></i>&nbsp;{submitBtnName}
          </button>
        </div>
      </div>
    </div>
  </section>

)

export default StoryForm