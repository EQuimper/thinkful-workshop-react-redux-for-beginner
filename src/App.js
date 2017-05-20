import React, { Component } from 'react';
import ReduxToastr from 'react-redux-toastr';

import Routes from './Routes';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Routes />
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
          />
        </div>
      </div>
    );
  }
}

export default App;
