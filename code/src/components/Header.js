import React from 'react'
import Style from '../style/Header.css'

class Header extends React.Component {
  render() {
    return (
      <header className={Style.header}>
        <span className={Style.title}>豆瓣电影</span> 
        <span className={Style.search}></span>
      </header>
    )
  }
}

export default Header