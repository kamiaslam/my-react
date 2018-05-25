import React, { Component } from 'react';
import './searchbox.css';

class Searchbox extends Component {
  render() {
    return (
       <div>
         <input type="text" className="mainsearch" placeholder="Search" />
       </div>  
    )
  }
}

export default Searchbox;
