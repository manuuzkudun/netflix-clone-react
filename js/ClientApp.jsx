import React from 'react'
import ReactDOM from 'react-dom'
import Landing from './Landing'
import { Router, Route, hashHistory } from 'react-router'
import Search from './Search'

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/search' component={Search} />
  </Router>
)
ReactDOM.render(<App />, document.getElementById('app'))
