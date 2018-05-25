import React, { Component } from 'react';
import './App.css';
import Profile from './component/Profile';


class App extends Component {
  render() {
    return (
        <div className="my-wrapper">
          <div className="container-fluid">
            <div className="row justify-content-md-center">
                <Profile />
            </div>
          </div>
        </div>
    )
  }
}

export default App;
