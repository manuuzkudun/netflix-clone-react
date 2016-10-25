import React from 'react'
import { Link } from 'react-router'
import { connector } from './Store'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
  }

  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  }

  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input
        onChange={this.handleSearchTermEvent}
        value={this.props.searchTerm}
        className='search-input'
        type='text'
        placeholder='Search' />
    } else {
      utilSpace = (
        <h2 className='header-back'>
          <Link to='/search'>Back</Link>
        </h2>
      )
    }
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>
            svideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

Header.propTypes = {
  showSearch: React.PropTypes.bool,
  setSearchTerm: React.PropTypes.func,
  searchTerm: React.PropTypes.string
}

module.exports = connector(Header)
