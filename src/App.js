
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstnum : 0,
      Secondnum : 0,
      Result : '',
    };
  }

  inputHandler = (event) => {
    const { Firstnum, Secondnum} = this.state;
    if(event.target.value === "+") {
      this.setState({Result : Firstnum + Secondnum});
    }
    if(event.target.value === "-") {
        this.setState({Result : Firstnum - Secondnum});
    }
    if(event.target.value === "*") {
        this.setState({Result : Firstnum * Secondnum});
    }
    if(event.target.value === "/") {
        this.setState({Result : Firstnum / Secondnum});
    }
    if(event.target.value === "^") {
        this.setState({Result : Math.pow(Firstnum, Secondnum)});
    }
   
  }

  render() {
    const {Result } = this.state;
    return (
      
    <div id="top">
      
      {this.Firstnum}  {this.Secondnum}
     First Number: <input placeholder="input number here..."  onChange={event => this.setState({Firstnum: Number(event.target.value) })}></input>
      &nbsp; &nbsp;
      Second Number: <input placeholder="input number here..." onChange={event => this.setState({Secondnum: Number(event.target.value) })}></input>
      <div>
        <br/>
          Operations: 
          <br/>
          <button class="button" value="+" onClick={this.inputHandler}>+</button>&nbsp;&nbsp;
          <button class="button" value="-" onClick={this.inputHandler}>-</button>&nbsp; &nbsp;
          <button class="button" value="*" onClick={this.inputHandler}>*</button>&nbsp; &nbsp;
          <button class="button" value="/" onClick={this.inputHandler}>/</button>&nbsp; &nbsp;
          <button class="button" value="^" onClick={this.inputHandler}>^</button>
       <br/><br/>
       Result: <h3>{Result}</h3>
      </div>     
    </div>
    );    
  }
}
export default App;





// import React from "react";
// import { render } from "react-dom";
// import "./style.css";

// class App extends React.Component {
//   state = {
//     firstVal: 0,
//     secondVal: 0
//   };

//   updateInputValue = evt => {
//     const { name, value } = evt.target;
//     this.setState({
//       [name]: parseInt(value)
//     });
//   };

//   add = () => {
//     const { firstVal, secondVal } = this.state;
//     alert ("The SUM is " + (firstVal + secondVal));
//   };

//   substract = () => {
//     const { firstVal, secondVal } = this.state;
//     alert("The DIF is " + (firstVal - secondVal));
//   };

  

//   render() {
//     return (
//       <div>
//         <input
//           placeholder="first value"
//           value={this.state.inputValue}
//           name="firstVal"
//           onChange={evt => this.updateInputValue(evt)}
//         />
//         <input
//           placeholder="second value"
//           value={this.state.inputValue}
//           name="secondVal"
//           onChange={evt => this.updateInputValue(evt)}
//         />
//         <button onClick={this.add}>+</button>
//         <button onClick={this.substract}>-</button>
//       </div>
//     );
//   }
// }

