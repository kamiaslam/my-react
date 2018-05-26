import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PeopleList from './component/PeopleList';


class App extends Component {

    state = {
      people : []
    }
  
  
  componentWillMount(){
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      // console.log(res);
      this.setState({
        people: res.data
      })
    })
  }

  render() {
    // console.log(this.state.people)
    return (
        <div className="app-container">
          <div className="data-container">
            <PeopleList data={this.state.people}  />
          </div>
        </div>
    )
  }
}

export default App;
