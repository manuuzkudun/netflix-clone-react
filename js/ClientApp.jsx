import React from 'react'
import ReactDOM from 'react-dom'
import Landing from './Landing'
import Layout from './Layout'
import Search from './Search'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
    </Route>
  </Router>
)
ReactDOM.render(<App />, document.getElementById('app'))
