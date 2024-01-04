import painting from '../../painting.json';
import {colorPickerOptions} from '../../colorOptions';
import { PaintingList } from '../PaintingList/PaintingList';
import { ColorPicker } from '../ColorPicker/ColorPicker';
import { Alert } from '../Alert/Alert';
import { Container, Title } from './App.styled';
import { GlobalStyle } from '../../GlobalStyle.styled';
import { Counter } from '../Counter/Counter';

export function App() {
  return(
    <div>
      <Counter/>
       {/* <PaintingList painting={painting}/> */}
      {/* <ColorPicker options={colorPickerOptions}/> */}
      {/* <Alert text="Останнє попередження" type="warning"/>
      <Alert text="Ура! Все ок!" type="success"/>
      <Alert text="О жах - все пропало!" type="error"/> */}
      <GlobalStyle/>
    </div>
  )
}





