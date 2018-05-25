import React, { Component } from 'react';

class CalcDisplay extends Component {
  constructor(props){
    super(props)
    // console.log(props)
    this.state = {
      receiveValue : 0
    }
  }

  // Static = is a speacila type of function which is independent from the class and we do not use THIS keyword in this function. Also, we can use reference of class in this function 

  static getDerivedStateFromProps(nextProps, prevState) {   // the purpose of this lifecycle method is,if any props value change in the parent component this function will be triggered 
    let finalValue = ""  
  
    nextProps.dateValue.map((item, index)=>{
      if(item == "=") {
        finalValue = eval(finalValue)  // This line of code i do not understand at all
      } 
      else if(item == "AC") {
        finalValue = ""
      }  
      else {
        finalValue += item   // When this condition is true the programme will add and increment the value in this variable 
      }
    })
    console.log(finalValue)
     return {
       receiveValue : finalValue
     }
  }
 render() {
    return (
      <div id="calc__ID" className="calculator__display">{this.state.receiveValue}</div>
    );
  }
}

export default CalcDisplay;


// My confusion in this code is where we are getting the values inside finalValue variable