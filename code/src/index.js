import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Route from './routes'
import './style/base.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './store/reducers'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
      <Route />
    </Provider>
  , document.getElementById('root'))
registerServiceWorker()
