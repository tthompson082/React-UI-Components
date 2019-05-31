import React from 'react';
import './App.css';

import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

// const App = () => {
//   const clear = 'clear';
//   const division = '÷';

//   const seven = '7';
//   const eight = '8';
//   const nine = '9';
//   const multiplication = 'X';

//   const four = '4';
//   const five = '5';
//   const six = '6';
//   const subtraction = '-';

//   const one = '1';
//   const two = '2';
//   const three = '3';
//   const addition = '+';

//   const zero = '0';
//   const equals = '=';

//   const actionButton = 'action-button';
//   const number = 'number';
//   const symbol = 'symbol';
  
//   return (
//     <div className='app'>
//       <Display />
      
//       <div className='row-one'>
//         <ActionButton buttonStyle={actionButton} text={clear} />
//         <NumberButton buttonStyle={symbol} text={division} />
//       </div>

//       <div className='row-two'>
//         <NumberButton buttonStyle={number} text={seven} />
//         <NumberButton buttonStyle={number} text={eight} />
//         <NumberButton buttonStyle={number} text={nine} />
//         <NumberButton buttonStyle={symbol} text={multiplication} />
//       </div>

//       <div className='row-three'>
//         <NumberButton buttonStyle={number} text={four} />
//         <NumberButton buttonStyle={number} text={five} />
//         <NumberButton buttonStyle={number} text={six} />
//         <NumberButton buttonStyle={symbol} text={subtraction} />
//       </div>

//       <div className='row-four'>
//         <NumberButton buttonStyle={number} text={one} />
//         <NumberButton buttonStyle={number} text={two} />
//         <NumberButton buttonStyle={number} text={three} />
//         <NumberButton buttonStyle={symbol} text={addition} />
//       </div>

//       <div className='row-five'>
//         <ActionButton buttonStyle={actionButton} text={zero} />
//         <NumberButton buttonStyle={symbol} text={equals} />
//       </div>
//     </div>
//   );
// };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clear: 'clear',
      division: '÷',

      seven: '7',
      eight: '8',
      nine: '9',
      multiplication: 'X',

      four: '4',
      five: '5',
      six: '6',
      subtraction: '-',

      one: '1',
      two: '2',
      three: '3',
      addition: '+',

      zero: '0',
      equals: '=',

      actionButton: 'action-button',
      number: 'number',
      symbol: 'symbol',
    }
  }

  render() {
    return (
      <div className='app'>
        <Display />
        
        <div className='row-one'>
          <ActionButton buttonStyle={this.state.actionButton} text={this.state.clear} />
          <NumberButton buttonStyle={this.state.symbol} text={this.state.division} />
        </div>

        <div className='row-two'>
          <NumberButton buttonStyle={this.state.number} text={this.state.seven} />
          <NumberButton buttonStyle={this.state.number} text={this.state.eight} />
          <NumberButton buttonStyle={this.state.number} text={this.state.nine} />
          <NumberButton buttonStyle={this.state.symbol} text={this.state.multiplication} />
        </div>

        <div className='row-three'>
          <NumberButton buttonStyle={this.state.number} text={this.state.four} />
          <NumberButton buttonStyle={this.state.number} text={this.state.five} />
          <NumberButton buttonStyle={this.state.number} text={this.state.six} />
          <NumberButton buttonStyle={this.state.symbol} text={this.state.subtraction} />
        </div>

        <div className='row-four'>
          <NumberButton buttonStyle={this.state.number} text={this.state.one} />
          <NumberButton buttonStyle={this.state.number} text={this.state.two} />
          <NumberButton buttonStyle={this.state.number} text={this.state.three} />
          <NumberButton buttonStyle={this.state.symbol} text={this.state.addition} />
        </div>

        <div className='row-five'>
          <ActionButton buttonStyle={this.state.actionButton} text={this.state.zero} />
          <NumberButton buttonStyle={this.state.symbol} text={this.state.equals} />
        </div>
    </div>
    )
  }
}

export default App;
