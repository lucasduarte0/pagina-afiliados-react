import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import LandingPage1ResponsiveMobile from './views/landing-page1responsive-mobile'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={LandingPage1ResponsiveMobile} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
