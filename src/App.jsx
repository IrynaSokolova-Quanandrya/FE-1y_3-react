import painting from './painting.json';
import { PaintingList } from './components/PaintingList/PaintingList'

export function App() {
  
  return(
    <div>
       <PaintingList painting={painting}/>
           
    </div>
  )
}





