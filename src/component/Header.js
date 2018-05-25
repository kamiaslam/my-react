import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';


class Header extends Component {
  constructor(prop) {
    super()
    this.state = {
      list : [
        {text: 'Home', id:1, link: '#', active: 'no-active'},
        {text: 'About Us', id:2, link: '#', active: 'no-active'},
        {text: 'News', id:3, link: '#', active: 'no-active'},
        {text: 'Contact', id:4, link: '#', active: 'no-active'},
      ]
    }
  }

  findId = (id) => {
    console.log(id);
    let newState = this.state.list;
    newState.map((item, index) => {
      (item.id === id ? newState[index].active = "active" : newState[index].active = "no-active");
    })
    this.setState({
      list: newState
    })
  }


  render() {
    return (
        <header className="">
          <Nav link={this.state.list} abc={(id)=>this.findId(id)} />
        </header>
    )
  }
}

export default Header;
