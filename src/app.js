import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/style.scss'

import SignUp from './components/SignupForm'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Home from './components/Home'

class App extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  render(){
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home}/>
          {/* <Route path="/stories" component={Stories}/> */}
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
