import React, { Component } from 'react';
import '../App.css';
import Button from './Button';
import Calc from './Calc';

class Detail extends Component {
    constructor(props) {
        super(props)
        // console.log(props)

        this.state = {
            fname: props.data.fname, 
            lname: props.data.lname, 
            cname: props.data.cname, 
            cityname: props.data.cityname,
            btn : 'click me'
        }
    }       

// componentWillMount() {
//     this.setState ({  
//             fname: this.props.data.fname, 
//             lname: this.props.data.lname, 
//             cname: this.props.data.cname, 
//             cityname: this.props.data.cityname
//     })   
// }
changeName =  e => {
    // console.log('name is changing')
    this.setState({
        fname: e.target.value
    })
}  
 

render() {
    return (
        <div>
            <div>
                <label>First name: {this.state.fname}</label>
            </div>
            <div>
                <label>Last name: {this.state.lname}</label>
            </div>
            <div>
                <label>Country name: {this.state.cname}</label>
            </div>
            <div>
                <label>City name: {this.state.cityname}</label>
            </div>
            <input type="text" onChange={(e)=>this.changeName(e)}  /> 

            <select onChange={(e)=>this.changeName(e)} >
                <option>Rahul</option>
                <option>Ali</option>
                <option>Salman</option>    
            </select> 
            <div>
                <Button data={this.state.btn} />
            </div>    
            <div>
                <Calc />
            </div>
        </div>
    )
    }
}

export default Detail;
