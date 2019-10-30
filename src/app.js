import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/style.scss'

import SignUp from './components/Signup'
import Login from './components/Login'
import MessagesCard from './components/MessagesCard'

import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import SecureRoute from './components/common/SecureRoute'

import Dashboard from './components/dashboard/Dashboard'

import Stories from './components/story/Stories'
import StoryNew from './components/story/StoryNew'

class App extends React.Component {

  render(){
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <SecureRoute path="/stories/new" component={StoryNew}/>
          <Route path="/stories" component={Stories}/>
          <Route path="/register" component={SignUp}/>
          <SecureRoute path="/dashboard" component={Dashboard}/>
          <Route path="/login" component={Login}/>
          <Route path="/offers/:id/messages" component={MessagesCard}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
