import React from 'react'
import Style from '../style/Rating.css'

class Rating extends React.Component {
  render() {
    const count = Math.round(this.props.rating / 2)
    if(count > 0) {
      return (
        <div className={Style.rating}>
          <span className={[Style.rating_item, count > 0 ? Style.rating_star: Style.rating_gray_star].join(' ')}></span>
          <span className={[Style.rating_item, count > 1 ? Style.rating_star: Style.rating_gray_star].join(' ')}></span>
          <span className={[Style.rating_item, count > 2 ? Style.rating_star: Style.rating_gray_star].join(' ')}></span>
          <span className={[Style.rating_item, count > 3 ? Style.rating_star: Style.rating_gray_star].join(' ')}></span>
          <span className={[Style.rating_item, count > 4 ? Style.rating_star: Style.rating_gray_star].join(' ')}></span>
          {!this.props.visible && (<span className={Style.rating_num}>{ this.props.rating }</span>)}
        </div>
      )
    }else {
      return (
        <div className={Style.rating}>
          <span className={Style.rating_num}>暂无评分</span>
        </div>
      )
    }
  }
}

export default Rating