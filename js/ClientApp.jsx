import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Landing from './Landing'
import Layout from './Layout'
import Search from './Search'
import Details from './Details'
import { shows } from '../public/data'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { store } from './Store'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.assignShow = this.assignShow.bind(this)
  }
  assignShow (nextState, replace) {
    const showArray = shows.filter(show => show.imdbID === nextState.params.id)
    if (showArray.length < 1) {
      return replace('/')
    }
    Object.assign(nextState.params, showArray[0])
    return nextState
  }
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} shows={shows} />
            <Route path='/details/:id' component={Details} onEnter={this.assignShow} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
