import React from 'react'
import jsonp from 'jsonp'
import { ADD_IN_THEATERS_DATA } from '../store/actions'
import { connect } from 'react-redux'
import Style from '../style/Home.css'
import ListItem from '../components/ListItem'
import Loading from '../components/Loading'

class In_theaters extends React.Component {
  constructor() {
    super()
    this.scroll = this.scroll.bind(this)
    this.state = {
      loading: false
    }
  }
  render() {
    let listItems = this.props.data.list && this.props.data.list.map((item, index) => <ListItem data={item} key={index}/>)
    return (
      <div>
        <p className={Style.subject} style={{textAlign:'center'}}>影院热映</p>
        <div className={Style.wrapper}>
          { listItems }
        </div>
        { this.state.loading === true && <Loading /> }
      </div>
    )
  }
  loadData() {
    this.setState({
      loading: true
    })
    window.removeEventListener('scroll', this.scroll)
    jsonp('https://api.douban.com/v2/movie/in_theaters?count=21&start=' + (this.props.data.page-1)*21, 
    (err, data) => {
      this.setState({
        loading: false
      })
      if(data.subjects.length === 0) {
        return window.removeEventListener('scroll', this.scroll)
      }
      this.props.addData([...this.props.data.list, ...data.subjects], this.props.data.page + 1)
      window.addEventListener('scroll', this.scroll)
    })
  }
  scroll() {
    if(window.pageYOffset+ window.innerHeight >= document.documentElement.scrollHeight) {
      this.loadData()
    }
  }
  componentDidMount() {
    if(this.props.data.list.length === 0) {
      this.loadData()
    }else {
      window.addEventListener('scroll', this.scroll)  
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll)
  }
}

const mapStateToProps = state => {
  return {
    data: state.in_theaters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addData: (data, page) => {
      dispatch(ADD_IN_THEATERS_DATA(data, page))
    }
  }
}

In_theaters = connect(mapStateToProps, mapDispatchToProps)(In_theaters)

export default In_theaters