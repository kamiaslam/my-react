import React, { Component } from 'react';
import Suggestions from './Suggestions'
import './mainvideo.css';

class Mainvideo extends Component {
  para = React.createRef();

  constructor() {
    super()
    this.state = {
        landingLink : 'http://www.youtube.com/embed/W7qWa52k-nE',
        activeClass : 'active'
    }
    // this.greeting = this.greeting.bind(this)
  }

  // greeting = (event) => {
  //   // console.log(this.state.activeClass)
  //   // console.log(this.setState({
  //   //   activeClass: 'kam.com'
  //   // }))
  //   console.log(this)
  // }

  // para = React.createRef();
  handleClick = (event) => {
    console.log(this.para.current.innerText)
  }
  

  changeVideo(newVideo) {
    let clickedVideo = newVideo.target.innerHTML;
    let checkClass = newVideo.target.className;
    
    this.setState({
      landingLink: clickedVideo
    })
    
    // console.log(newVideo.target.innerHTML);

  }

  render() {
    return (
      <div className="col-md-12"> 
      <div className="col-md-8"> 
        <iframe id="vPlayer" src={this.state.landingLink}
        width="560" height="315" frameBorder="0" allowFullScreen></iframe>
        {/* <h1>{this.state.landingLink}</h1> */}
        <button onClick={this.handleClick} ref={this.para}>Click me</button>
      </div>
         <Suggestions properties={this.state.videos} style={this.state.activeClass} greeting={this.greeting} changeVideo={this.changeVideo.bind(this)} />
      </div>
    )
  }
}

export default Mainvideo;
