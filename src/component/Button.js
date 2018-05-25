import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: "active"
    }

  }

  addClass = e => {
    this.setState({
      active: 'not-active'
    })
    if (this.state.active && this.state.active === 'not-active') {
      this.setState({
        active: 'active'
      })
    }

  }

  render() {
    return (
      <button className={this.state.active} onClick={(e)=>this.addClass(e)}>{this.props.data}</button>
    );
  }
}

export default Button;
