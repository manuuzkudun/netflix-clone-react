import React from 'react'
import data from '../public/data'
import ShowCard from './ShowCard'

export default class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
  }

  handleSearchTermEvent (event) {
    this.setState({searchTerm: event.target.value})
  }

  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>svideo</h1>
          <input onChange={this.handleSearchTermEvent}
            value={this.state.searchTerm}
            className='search-input'
            type='text' placeholder='Search' />
        </header>
        <div className='shows'>
          {data.shows.filter((show) =>
            `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
}
