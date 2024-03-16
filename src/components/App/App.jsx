import {colorPickerOptions} from '../../colorOptions';
import { ColorPicker } from '../ColorPicker/ColorPicker';
import { GlobalStyle } from '../../GlobalStyle.styled';
import { Counter } from '../Counter/Counter';
import { Component } from 'react';
import { Form } from '../SignupForm/Form';
import { Clock } from '../Clock/Clock';
/**
 * useState рефакторимо ColorPicker та SignupForm
 * useEffect замість методів життєвого циклу
 * 1 - Counter
 * 2 - створюємо SignupForm
 * 3 - зберігаємо дані форми в localStorage 
 * 4 - власні хуки
 * 5 - рефакторимо попередній код todo
 * 6 - рефакторимо покемонів
 */
export class App extends Component {
  render(){
    return(
    <div>
            {/* <Counter/>  */}
        {/* <ColorPicker options={colorPickerOptions}/> */}
        {/* <Form/> */}
        <Clock />
       
      <GlobalStyle/>
    </div>
  )
  } 
}





