import React, { Component } from 'react';

class CalcButtons extends Component {
  constructor(props) {
  super(props)
    this.state= {
      textboxValueNew : this.props.textboxValue
    }
  }

  testClick = value => {
    this.props.number(value)
  }

  render() {

    return (
        <div className="calculator__keys">
          {
            this.props.data.text.map((item, index) => {
             return (
             <button onClick={(value)=>this.testClick(item.value)}>{item.value}</button>
             )
            })
          }

          {/* <button onClick={(e, num)=>this.numberClick(e, "+")} className="key--operator">+</button>
          <button onClick={(e, num)=>this.numberClick(e, "-")} className="key--operator">-</button>
          <button onClick={(e, num)=>this.numberClick(e, "*")} className="key--operator">*</button>
          <button onClick={(e, num)=>this.numberClick(e, "/")} className="key--operator">/</button>
          <button onClick={(e, num)=>this.numberClick(e, 1)}>1</button>
          <button onClick={(e, num)=>this.numberClick(e, 2)}>2</button>
          <button onClick={(e, num)=>this.numberClick(e, 3)}>3</button>
          <button onClick={(e, num)=>this.numberClick(e, 4)}>4</button>
          <button onClick={(e, num)=>this.numberClick(e, 5)}>5</button>
          <button onClick={(e, num)=>this.numberClick(e, 6)}>6</button>
          <button onClick={(e, num)=>this.numberClick(e, 7)}>7</button>
          <button onClick={(e, num)=>this.numberClick(e, 8)}>8</button>
          <button onClick={(e, num)=>this.numberClick(e, 9)}>9</button>
          <button onClick={(e, num)=>this.numberClick(e, 0)}>0</button>
          <button onClick={(e, num)=>this.clearClick(e, "ac")} className="clear__button">AC</button>
          <button onClick={(e, num)=>this.numberClick(e, "=")} className="key--equal">=</button>                                                     */}
        </div>
              
    );
  }
}

export default CalcButtons;
