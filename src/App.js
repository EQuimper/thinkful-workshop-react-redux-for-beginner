import React, { Component } from 'react';

import Routes from './Routes';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
