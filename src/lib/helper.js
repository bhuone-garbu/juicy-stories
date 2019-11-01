// this is a helper class with bunch of helpful functions
import Auth from './auth'
import axios from 'axios'

class Helper {

  // does the user own the story - true or false
  static isUserOwner(story) {
    if (!story) return false

    // doing string compare because of auth payload  
    return story.postedBy._id === Auth.getPayload().sub
  }

  // utility function to capitalize the first letter of a word
  static capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.substring(1)
  }

  // get request and fetch the user detail and return the promise itself with the correct field populate
  static getUserDetail() {
    return axios.get(`/api/users/${Auth.getPayload().sub}`, { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
      .then(res => ({
        id: res.data._id,
        firstName: this.capitalizeFirstLetter(res.data.firstName),
        lastName: this.capitalizeFirstLetter(res.data.lastName),
        profileUrl: res.data.profileUrl
      }))
  }

}

export default Helper