// this is a helper class with bunch of helpful functions
import Auth from './auth'

class Helper {

  // does the user own the story - true or false
  isUserOwner(story){
    if (!story) return false

    // doing string compare because of auth payload  
    return story.postedBy.toString() === (Auth.getPayload().sub)
  }

  //
  refreshToken(){

  }

}

export default Helper