import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './style.scss'
import SignUp from './components/SignupForm'
import Navbar from './components/Navbar'

class App extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  render(){
    return (
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/register" component={SignUp}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
