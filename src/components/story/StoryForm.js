import React from 'react'

// this is the form that will be used to edit/add story
const StoryForm = ({ title, description, contentLink , minimumPrice, category, handleSubmit, handleChange }) => (
  
  <section className="tile-centered">
    <div className="card center col-6">
      <div className="form-group">
        <label className="form-label" htmlFor="title">Title</label>
        <input onChange={handleChange} className="form-input input-lg" value={title} type="text" id="title" placeholder="Title" 
          
        />
        <label className="form-label" htmlFor="description">Description</label>
        <input onChange={handleChange} className="form-input input-lg" value={description} type="text" id="description" placeholder="description"
          
        />
        <label className="form-label" htmlFor="contentLink">Image Url</label>
        <textarea onChange={handleChange} className="form-input input-lg" value={contentLink} type="contentLink" id="contentLink" placeholder="Image Url"
                        
        />
        <label className="form-label" htmlFor="price">Minimum price</label>
        <input onChange={handleChange} className="form-input input-lg" value={minimumPrice} type="minimumPrice" id="minimumPrice" placeholder="price"
          
        />
        <label className="form-label" htmlFor="category">Category</label> 
        <div className="form-group">
          <select onChange={handleChange} value={category} className="form-select" id="category">
            <option value="audio">Audio</option>
            <option value="video">Video</option>
            <option value="image">Image</option>
          </select>
        </div>   
        <div className="form-group" id="status">
          <select onChange={handleChange} value={status} className="form-select" id="status" >
            <option value="draft" >Draft</option>
            <option value="released">Released</option>
          </select>
        </div>   
        <div className="card-footer text-center">
          <button  onClick={handleSubmit} className="btn btn-error input-group-btn input-lg"><i className="icon icon-upload"></i>&nbsp;Create Story</button>
        </div>
      </div> 
    </div>
  </section>
  
)

export default StoryForm