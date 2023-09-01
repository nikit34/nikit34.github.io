import React from 'react'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Sidebar from './components/Sidebar'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Contact from './components/Contact'
import Projects from './components/projects/Projects'
import Resume from './components/resume/Resume'


function App() {

  const location = useLocation();


  return (
    <div className="app">
      <div className="container app__container">
        <div className="row app__row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9 app__main-content">
            <Navbar />
            <AnimatePresence mode='wait'>
              <Switch location={location} key={location.key}>
                <Route exact path="/">
                  <Projects />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
