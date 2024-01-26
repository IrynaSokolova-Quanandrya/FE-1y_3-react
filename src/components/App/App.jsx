import painting from '../../painting.json';
import {colorPickerOptions} from '../../colorOptions';
import { PaintingList } from '../PaintingList/PaintingList';
import { ColorPicker } from '../ColorPicker/ColorPicker';
import { Alert } from '../Alert/Alert';
import { Container, Title } from './App.styled';
import { GlobalStyle } from '../../GlobalStyle.styled';

/**
 * робимо todo список
 * декілька форм та однаковий id
 * створюємо нову форму TodoEditor
 * додаємо нові завдання в стейт не мутуючи масиву
 * видаляємо завдання не мутуючи масиву * 
 * radio
 * чекбокси
 */

export function App() {
  return(
    <div>

      {/* <Container>
        <Title>Title</Title>
      </Container> */}
      

       {/* <PaintingList painting={painting}/> */}
      {/* <ColorPicker options={colorPickerOptions}/> */}
      {/* <Alert text="Останнє попередження" type="warning"/>
      <Alert text="Ура! Все ок!" type="success"/>
      <Alert text="О жах - все пропало!" type="error"/> */}
      <GlobalStyle/>
    </div>
  )
}





