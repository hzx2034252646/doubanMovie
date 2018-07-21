import React from 'react'
import Style from '../style/ListItem.css'
import Rating from './Rating'
import { withRouter } from 'react-router-dom'

class ListItem extends React.Component {
  render() {
    let cover = this.props.data.images.small
    let title = this.props.data.title
    let rating = this.props.data.rating
    rating = (rating && rating.average) || 0
    return (
      <div className={Style.movie_item} onClick={this.loadMovieDetail.bind(this)}>
        <div className={Style.cover}>
          <img src={ cover } alt="" />
        </div>
        <p className={Style.title}>{ title }</p>
        <Rating rating={ rating } />
      </div>
    )
  }
  loadMovieDetail() {
    this.props.history.push('/subject/' + this.props.data.id)
  }
}

export default withRouter(ListItem)