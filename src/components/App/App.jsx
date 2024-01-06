import painting from '../../painting.json';
import {colorPickerOptions} from '../../colorOptions';
import { PaintingList } from '../PaintingList/PaintingList';
import { ColorPicker } from '../ColorPicker/ColorPicker';
import { Alert } from '../Alert/Alert';
import { Container, Title } from './App.styled';
import { GlobalStyle } from '../../GlobalStyle.styled';
import { Counter } from '../Counter/Counter';
import { Component } from 'react';

export class App extends Component {

  state = {
    isVisible: false,
  }

  toggleVisible = ()=>{
    this.setState((prevState)=>{
        return{
          isVisible: !prevState.isVisible
        }
    })
  }
  render(){
    return(
    <div>
      <button 
        type='button' 
          onClick={this.toggleVisible}>{this.state.isVisible ? 'Приховати' : 'Показати'}</button>
      {this.state.isVisible && <p>Ви мене бачите</p>}

      {/* <Counter/> */}
       {/* <PaintingList painting={painting}/> */}
      {/* <ColorPicker options={colorPickerOptions}/> */}
      {/* <Alert text="Останнє попередження" type="warning"/>
      <Alert text="Ура! Все ок!" type="success"/>
      <Alert text="О жах - все пропало!" type="error"/> */}
      <GlobalStyle/>
    </div>
  )
  } 
}





