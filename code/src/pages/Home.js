import React from 'react'
import { Link } from 'react-router-dom'
import Style from '../style/Home.css'
import jsonp from 'jsonp'
import ListItem from '../components/ListItem'
import { ADD_HOMEPAGE_DATA } from '../store/actions'
import { connect } from 'react-redux'

class Home extends React.Component {
  render() {
    let listItems1 = (this.props.data[0] && this.props.data[0].map((item, index) => <ListItem data={item} key={index} /> )) || []
    let listItems2 = (this.props.data[1] && this.props.data[1].map((item, index) => <ListItem data={item} key={index} /> )) || []
    let listItems3 = (this.props.data[2] && this.props.data[2].map((item, index) => <ListItem data={item} key={index} /> )) || []
    return (
      <div style={{marginBottom: '.5rem'}}>
        { listItems1.length > 0 && (
          <p className={Style.subject}>
            影院热映<Link className={Style.more} to="/in_theaters">更多</Link>
          </p>
        )}
        <div className={Style.container}>
          { listItems1 }
        </div>
        { listItems2.length > 0 && (
          <p className={Style.subject}>
            即将上映<Link className={Style.more} to="/coming_soon">更多</Link>
          </p>
        )}
        <div className={Style.container}>
          { listItems2 }
        </div>
        { listItems3.length > 0 && (
          <p className={Style.subject}>
            TOP250<Link className={Style.more} to="/top250">更多</Link>
          </p>
        )}
        <div className={Style.container}>
          { listItems3 }
        </div>
      </div>
    )
  }
  componentDidMount() {
    if(this.props.data[0]) {
      return
    }
    jsonp('https://api.douban.com/v2/movie/in_theaters', (err, data) => {
      this.props.addData(data.subjects.slice(0, 8))
      jsonp('https://api.douban.com/v2/movie/coming_soon', (err, data) => {
        this.props.addData(data.subjects.slice(0, 8))
        jsonp('https://api.douban.com/v2/movie/top250', (err, data) => {
          this.props.addData(data.subjects.slice(0, 8))
        })
      })
    })
  }
}

const mapStateToProps = state => {
  return {
    data: state.HomePageData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addData: data => {
      dispatch(ADD_HOMEPAGE_DATA(data))
    }
  }
}

Home = connect(mapStateToProps, mapDispatchToProps)(Home)

export default Home