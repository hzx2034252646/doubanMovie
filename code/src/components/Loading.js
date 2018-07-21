import React from 'react'

class Loading extends React.Component {
  render() {
    return (
      <div style={{textAlign:'center',margin:'.5rem'}}>
        <img src={require('../image/loading.gif')} alt='' style={{width:'1rem',height:'1rem'}}/>
      </div>
    )
  }
}

export default Loading