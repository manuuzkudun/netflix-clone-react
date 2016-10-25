import React from 'react'
import ShowCard from './ShowCard'
import Header from './Header'
import { connector } from './Store'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange (searchTerm) {
    this.setState({searchTerm: searchTerm})
  }

  render () {
    return (
      <div className='container'>
        <Header
          showSearch
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
        />
        <div className='shows'>
          {this.props.route.shows.filter((show) =>
            `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  route: React.PropTypes.object
}

module.exports = Search
