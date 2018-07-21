import React from  'react'
import Style from '../style/MovieDetail.css'
import Rating from './Rating'
import Loading from './Loading'

class MovieDetail extends React.Component {
  render() {
    let data = this.props.data
    let cover = data.images && data.images.small
    let rating = (data.rating && data.rating.average) || 0
    let title = data.title
    let original_title = data.original_title
    let ratings_count = data.ratings_count
    ratings_count = ratings_count >= 10000 ? (ratings_count / 10000).toFixed(1) + '万' : ratings_count
    return (
      data.id ? (<div>
        <div className={Style.bg} style={{backgroundImage: 'url('+cover+')'}}>
          <div className={Style.mask}>
            <div className={Style.wrapper}>
              <img src={cover} alt='' />
              <div>
                <p>{title}</p>
                {title !== original_title && <p>{original_title}</p>}
                {rating >= 1 ? (<div className={Style.movie_rating}>
                  <span>{ rating }</span>
                  <div>
                    <Rating rating={rating} visible="true" />
                    <p>{ratings_count}人评价</p>
                  </div>
                </div>) : (<span>暂无评分</span>)}
              </div>
            </div>
          </div>
        </div>
        <div className={Style.info}>
          <p>
            <span>{data.year}</span>
            <span>{data.countries && data.countries[0]}</span>
            {data.genres && data.genres.map((item,index) => index === 0 ? item : ' / ' + item )}
          </p>
          <p>
            {data.directors && data.directors[0].name}（导演）
            {data.casts && data.casts.map(item => ' / ' + item.name )}
          </p>
          <div>
            <span>想看</span>
            <span>看过</span>
          </div>
        </div>
        <div className={Style.intro}>
          <div>{title}的剧情简介</div>
          <p>{data.summary}</p>
        </div>
      </div>): <Loading />
    )
  }
}

export default MovieDetail