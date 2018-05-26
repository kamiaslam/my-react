import React, { Component } from 'react';
// import axios from 'axios';
import './list.css';

class PeopleList extends Component {
  // constructor(props) {
    
  // }

  // state = {
  //   people : []
  // }

  // componentWillMount(){
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //   .then(res => {
  //     // console.log(res);
  //     this.setState({
  //       people: res.data
  //     })
  //   })
  // }

  render() {
    return (
      <ul>
        {
         this.props.data.map((item, index) => {
            return (
              <div key={item.id+index} className="blockList">
                <h3>Employee {index+1}</h3>
                <li><span>Name: </span>{item.name}</li>
                <li><span>Username: </span>{item.username}</li>
                <li><span>Email: </span>{item.email}</li>
                <li><span>Address: </span></li>
                <li><span>Street name: </span>{item.address.street}</li>
                <li><span>Suite: </span>{item.address.suite}</li>
                <li><span>City name: </span>{item.address.city}</li>
                <li><span>Zipcode : </span>{item.address.zipcode}</li>
                
              </div>
            )
        })
      
        }
      </ul>
    );
  }
}

export default PeopleList;
