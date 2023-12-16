import painting from './painting.json';
import {colorPickerOptions} from './colorOptions';
import { PaintingList } from './components/PaintingList/PaintingList'
import './App.css';
import styles from './App.module.css';
import { ColorPicker } from './components/ColorPicker/ColorPicker';
import { Alert } from './components/Alert/Alert';
const box = {color: 'red', fontSize: 18, margin: '50px 50px'}

export function App() {
  return(
    <div>
       <PaintingList painting={painting}/>

      {/* <div style={box}>стилізований бокс</div>
      <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Impedit dignissimos corrupti hic facilis velit eveniet possimus 
        culpa, sunt quam omnis.
      </p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Impedit dignissimos corrupti hic facilis velit eveniet possimus 
        culpa, sunt quam omnis.
      </p> */}

      {/* <ColorPicker options={colorPickerOptions}/> */}
      <Alert text="Останнє попередження" type="warning"/>
      <Alert text="Ура! Все ок!" type="success"/>
      <Alert text="О жах - все пропало!" type="error"/>
    </div>
  )
}





