import React from 'react'
import { Link, hashHistory } from 'react-router'
import { connector } from './Store'

class Landing extends React.Component {
  constructor (props) {
    super(props)
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.gotoSearch = this.gotoSearch.bind(this)
  }

  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  }

  gotoSearch (event) {
    hashHistory.push('search')
    event.preventDefault()
  }

  render () {
    return (
      <div className='home-info'>
        <h1 className='title'>svideo</h1>
        <form onSubmit={this.gotoSearch}>
          <input
            className='search'
            type='text'
            placeholder='Search'
            onChange={this.handleSearchTermEvent}
            value={this.props.searchTerm}
          />
        </form>

        <Link to='/search' className='browse-all'> or Browse All</Link>
      </div>
    )
  }
}

Landing.propTypes = {
  searchTerm: React.PropTypes.string,
  setSearchTerm: React.PropTypes.func
}

module.exports = connector(Landing)
