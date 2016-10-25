import React from 'react'
import Header from './Header'

class Details extends React.Component {
  constructor (props) {
    super(props)
    this.params = props.params || {}
  }

  render () {
    return (
      <div style={{textAlign: 'left'}} className='container'>
        <Header />
        <div className='video-info'>
          <h1 className='video-title'>{this.params.title}</h1>
          <h2 className='video-year'>({this.params.year})</h2>
          <img className='video-poster' src={`public/img/posters/${this.params.poster}`} />
          <p className='video-description'>{this.params.description}</p>
        </div>
        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${this.params.trailer}
          ?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen></iframe>
        </div>
      </div>
    )
  }
}

Details.propTypes = {
  params: React.PropTypes.object.isRequired
}

module.exports = Details
