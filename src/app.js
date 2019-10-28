import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './style.scss'

import SignUp from './components/SignupForm'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'

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
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
