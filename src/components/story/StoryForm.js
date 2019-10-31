import React from 'react'

// this is the form that will be used to edit/add story
const StoryForm = ({ title, description, contentLink , minimumPrice, category, handleSubmit, image1, image2,image3, handleChange, submitBtnName }) => (
  
  <section className="column col-12">
    <div className="bg-gray">
      <div className="form-group p-centered col-10"> 
        <label className="form-label" htmlFor="title">Title</label>
        <input onChange={handleChange} className="form-input input-lg" value={title} type="text" id="title" placeholder="Title"  
        />
        <label className="form-label" htmlFor="description">Description</label>
        <textarea onChange={handleChange} className="form-input input-lg" value={description} type="text" id="description" placeholder="description" 
        />
        <label className="form-label" htmlFor="contentLink">Image Url</label>
        <input onChange={handleChange} className="form-input input-lg" value={image1} type="url" id="image1" placeholder="Image Url"
                        
        /><label className="form-label" htmlFor="contentLink">Image Url</label>
        <input onChange={handleChange} className="form-input input-lg" value={image2} type="url" id="image2" placeholder="Image Url"               
        />
        <label className="form-label" htmlFor="contentLink">Image Url</label>
        <input onChange={handleChange} className="form-input input-lg" value={image3} type="url" id="image3" placeholder="Image Url"               
        />
        <label className="form-label" htmlFor="price">Minimum price</label>
        <input onChange={handleChange} className="form-input input-lg" value={minimumPrice} type="minimumPrice" id="minimumPrice" placeholder="price" 
        />
        <label className="form-label" htmlFor="contentLink">Conten link</label>
        <input onChange={handleChange} className="form-input input-lg" value={contentLink} type="contentLink" id="contentLink" placeholder="Image Url"              
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
          <button  onClick={handleSubmit} className="btn btn-error input-group-btn input-lg"><i className="icon icon-upload"></i>&nbsp;{submitBtnName}</button>
        </div>
      </div> 
    </div>
  </section>
  
)

export default StoryForm