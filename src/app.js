import React from 'react'
import ReactDOM from 'react-dom'


import './style.scss'
import SignUp from './components/SignupForm'

class App extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  render(){
    return (

      <div>
        <SignUp/>
      </div>


    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
