import React, { Component } from 'react';
import '../App.css';
import Detail from './Detail';


class Profile extends Component {
  constructor(prop) {
    super()
    this.state = 
        {fname: 'Kamran', lname:"Aslam", cname: 'United Kingdom', cityname: 'London'}
    
    }

  render() {
    return (
        <div>
            <Detail data={this.state} />
        </div>
    )
  }
}

export default Profile;
    