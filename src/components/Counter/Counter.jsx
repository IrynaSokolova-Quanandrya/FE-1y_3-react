import {Component} from 'react';
import './Counter.css';
import { Butttons } from './Buttons';
import { CounterValue } from './CaunterValue';
/**
 * класовий компонент
 * наслідування
 * події
 * синтетичний івент
 * як зберегти значення event.target
 * event один на всіх, бо глобальне делегування
 * інлайнові методи
 * контекст
 * конструктор
 * мінімізований синтаксис з коробки реакту
 * стан
 * зміна стану (перезапис, від початкового стану)
 * static defaultProps = {
    initialValue: 0,
  };
 * static propTypes = {
    //
  };
 * підняття стану
 * **/

  
  export class Counter extends Component {
    static defaultProps = {
      initialValue: 0,
    };
      
    state = {
      value: this.props.initialValue,
    }
    handleIncrement=()=>{
      // this.setState({
      //   value: 5,
      // })        
      this.setState((prevState)=>{
        return {
          value: prevState.value + 1
        }
      })
    }
    handleDecrement=()=>{
      this.setState((prevState)=>{
        return {
          value: prevState.value - 1
        }
      })      
    }

    render(){
      return(
        <div className="Counter Counter__controls">
          <CounterValue value={this.state.value} a={5}/>
          <Butttons onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
          />
      </div>
      )
    }
  }


