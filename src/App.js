import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/About'
// import Projects from './components/Projects'
// import Resume from './components/Resume'


function App() {
  return (
    <Router>
      <div className="app">
        <div className="container app__container">
          <div className="row app_row">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div className="col-lg-9 app__main-content">
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <About />
                </Route>
                {/* <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/projects" component={Projects}/> */}
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
