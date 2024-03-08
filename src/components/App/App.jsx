import painting from '../../painting.json';
import {colorPickerOptions} from '../../colorOptions';
import { PaintingList } from '../PaintingList/PaintingList';
import { ColorPicker } from '../ColorPicker/ColorPicker';
import { Container, Title } from './App.styled';
import { GlobalStyle } from '../../GlobalStyle.styled';
import { Counter } from '../Counter/Counter';
import { Component } from 'react';
/**
 * useState рефакторимо ColorPicker nf SignupForm
 * useEffect замість методів життєвого циклу
 * 1 - Counter
 * 2 - створюємо SignupForm
 * 3 - зберігаємо дані форми в localStorage 
 * 4 - власні хуки
 * 5 - рефакторимо попередній код todo
 */
export class App extends Component {
  render(){
    return(
    <div>
            {/* <Counter/>  */}
      {/* <ColorPicker options={colorPickerOptions}/> */}
     
      <GlobalStyle/>
    </div>
  )
  } 
}





