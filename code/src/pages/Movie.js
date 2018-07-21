import React from 'react'
import MovieDetail from '../components/MovieDetail'
import jsonp from 'jsonp'

class Movie extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {}
    }
  }
  render() {
    return (
      <div>
        <MovieDetail data={this.state.data}/>
      </div>
    )
  }
  componentDidMount() {
    jsonp('https://api.douban.com/v2/movie/subject/'+ this.props.match.params.id,
    (err, data) => {
      this.setState({
        data
      })
    })
  }
}

export default Movie