import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/style.scss'

import SignUp from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Home from './components/Home'
import Stories from './components/Stories'
import MessagesCard from './components/MessagesCard'

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
          <Route exact path="/" component={Home}/>
          <Route path="/stories" component={Stories}/>
          <Route path="/register" component={SignUp}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/login" component={Login}/>
          <Route path="/messages" component={MessagesCard}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
