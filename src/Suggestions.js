import React, { Component } from 'react';
import './suggestions.css';
// import Suggested from './Suggested';

class Suggestions extends Component {
  
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      videos : [
        {name: 'Shakira - Waka Waka', link:'www.youtube.com/watch?v=pRpeEdMmmQ0', id:1},
        {name: 'Korn - System', link:'www.youtube.com/watch?v=KyIW8CcfQrw', id:2},
        {name: 'Lestat Violin', link:'www.youtube.com/watch?v=hgg_JM9BDCE', id:3},
        {name: 'Korn - Slept so long', link:'www.youtube.com/watch?v=EH-SWKNAWN0', id:4}
      ]
    } 
  }

  



  render() {
    return (
      <div className="col-md-4"> 
         {
          this.state.videos.map((item, index) => {
            return <div>
              {/* <h2 onClick={(e, link) => (this.loadVideo(e, item.link))}>{item.name}</h2> */}
              <p onClick={this.props.greeting} key={index}>{item.link}</p>
              <h4 className={this.props.style} onClick={this.props.changeVideo} key={index}>{item.link}</h4>
              {/* {(e, link) => (this.loadVideo(e, item.link))} */}
            </div>
          })
        }
        </div>     
        
    )
  }
}

export default Suggestions;
