import React from 'react'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import Loadable from 'react-loadable'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'

const Loading = () => null

const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: Loading
})
const In_theaters = Loadable({
  loader: () => import('./pages/In_theaters'),
  loading: Loading
})
const Coming_soon = Loadable({
  loader: () => import('./pages/Coming_soon'),
  loading: Loading
})
const Top250 = Loadable({
  loader: () => import('./pages/Top250'),
  loading: Loading
})
const Movie = Loadable({
  loader: () => import('./pages/Movie'),
  loading: Loading
})

const App = () => (
  <Router>
    <ScrollToTop>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/in_theaters' component={In_theaters} />
      <Route path='/coming_soon' component={Coming_soon} />
      <Route path='/top250' component={Top250} />
      <Route path='/subject/:id' component={Movie} />
    </ScrollToTop>
  </Router>
)

export default App