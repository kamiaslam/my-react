import React, { Component } from 'react';
import '../App.css';
import '../nav.css';

class Nav extends Component {
    // componentDidMount(){
    //   console.log('Component Did Mount just fired!');
    // }

    addActive = (e, id) => {
      this.props.abc(id)
    }

  render() {
    return (
      <nav className="navbar navbar-expand-lg custom-navbar">
      <a className="navbar-brand" href="#">YouTube</a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {
            this.props.link.map((item, index) => {
             return <a key={index} herf="##"className={item.active} data-item={item.id} onClick={(e, id) => (this.addActive(e, item.id))} id={item.id}> {item.text} </a>
            })
          }
        </div>
      </div>
    </nav>
    )
  }
}
export default Nav;
