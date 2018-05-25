import React, { Component } from 'react';
import './Calc.css';
import CalcButtons from './CalcButtons';
import CalcDisplay from './CalcDisplay';

class Calc extends Component {
  constructor(props) {
  super(props)
    
  this.state= {
    // 
    textValue: "some value",
    text :  [
    {value: "1"}, 
    {value: "2"}, 
    {value: "3"}, 
    {value: "4"}, 
    {value: "5"}, 
    {value: "6"}, 
    {value: "7"}, 
    {value: "8"}, 
    {value: "9"}, 
    {value: "0"},
    {value: "+"}, 
    {value: "-"}, 
    {value: "*"}, 
    {value: "/"}, 
    {value: "="},
    {value: "AC"}
    ],
    textboxValue: []
  }
  
  }

  numberClick = number => {
    let userinput = this.state.textboxValue; // 
    userinput.push(number);
    this.setState({
      textboxValue: userinput
    })
  }

  clearClick = (e, number) => {
    this.setState({
      textboxValue: []
    })
  }


  changeFunc = e => {
    console.log(e.target.value)
    if(e.target.value != 5) {   // defined the logic to not show 5 
      this.setState({
        textValue: e.target.value   // React controlled input
      })
    }
  }


  render() {
    return (
      <div className="container">
          <input value={this.state.textValue} onChange={(e)=>this.changeFunc(e)} />
          <div className="calculator">
            <CalcDisplay dateValue = {this.state.textboxValue} />
            <CalcButtons data={this.state} number={this.numberClick} clear={this.clearClick} />           
          </div>
      </div>
    );
  }
}

export default Calc;
