import {Component} from 'react';
import './Counter.css';
import { Butttons } from './Buttons';
import { CounterValue } from './CaunterValue';
/**
 * дописуємо підрахунок загольної кількості кліків, 
 * спочатку на методи життєвого циклу потім на хуки 
 * **/

  
  // export class Counter extends Component {
          
  //   state = {
  //     value: 0,
  //   }
  //   handleIncrement=()=>{
  //     this.setState(prevState=>({
  //         value: prevState.value + 1
  //       }))
  //   }
  //   handleDecrement=()=>{
  //     this.setState((prevState)=>({
  //         value: prevState.value - 1
  //       }))
  //   }

  //   render(){
  //     return(
  //       <div className="Counter Counter__controls">
  //         <CounterValue value={this.state.value} a={5}/>
  //         <Butttons onIncrement={this.handleIncrement}
  //                   onDecrement={this.handleDecrement}
  //         />
  //     </div>
  //     )
  //   }
  // }

  export class Counter extends Component {
  state = {
    counterA: 0,
    counterB: 0,
  };

  handleCounterAIncrement = () => {
    this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
  };

  handleCounterBIncrement = () => {
    this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
  };

componentDidMount() {
  const { counterA, counterB } = this.state;
  const totalClicks = counterA + counterB;

  document.title = `Всього клікнули ${totalClicks} разів`;
}

componentDidUpdate(prevProps, prevState) {
  const { counterA, counterB } = this.state;

  if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
    const totalClicks = counterA + counterB;

    document.title = `Всього клікнули ${totalClicks} разів`;
  }
}

  render() {
    return (
      <>
        <button
          className='btn'
          type="button"
          onClick={this.handleCounterAIncrement}
        >
          Кликнули counterA {this.state.counterA} раз
        </button>

        <button
          className='btn'
          type="button"
          onClick={this.handleCounterBIncrement}
        >
          Кликнули counterB {this.state.counterB} раз
        </button>
      </>
    );
  }
}

