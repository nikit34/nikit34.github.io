import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="app__sidebar">
              <Sidebar />
            </div>
          </div>
          <div className="col-lg-9 app__main-content">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
