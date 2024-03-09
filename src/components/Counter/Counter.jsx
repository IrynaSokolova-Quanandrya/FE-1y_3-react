import {Component, useEffect, useState} from 'react';
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

  export const Counter = () => {
    const [counterA, setCounterA] = useState(0)
    const [counterB, setCounterB] = useState(0)
       
    const handleCounterAIncrement = () => {
    setCounterA(prevCounterA => prevCounterA + 1)
  };

    const handleCounterBIncrement = () => {
    setCounterB(prevCounterB => prevCounterB + 1)
    };
    
    useEffect(() => {
            console.log(`Всього клікнули ${counterA + counterB} разів`);
    },[counterA, counterB])

// componentDidMount() {
//   const { counterA, counterB } = this.state;
//   const totalClicks = counterA + counterB;

//   document.title = `Всього клікнули ${totalClicks} разів`;
//   console.log(document.title);
// }

// componentDidUpdate(prevProps, prevState) {
//   const { counterA, counterB } = this.state;

//   if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
//     const totalClicks = counterA + counterB;

//     document.title = `Всього клікнули ${totalClicks} разів`;
//     console.log(document.title);
//   }
// }

    return (
      <>
        <button
          className='btn'
          type="button"
          onClick={handleCounterAIncrement}
        >
          Клікнули counterA {counterA} разів
        </button>

        <button
          className='btn'
          type="button"
          onClick={handleCounterBIncrement}
        >
          Клікнули counterB {counterB} разів
        </button>
      </>
    );
 
}

