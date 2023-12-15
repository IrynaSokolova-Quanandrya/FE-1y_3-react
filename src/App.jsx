import { Header } from './components/Header';
import painting from './painting.json';
import { PaintingList } from './components/PaintingList/PaintingList'

export function App() {
  
  return(
    <div>
      <Header>
        <nav>Навігація</nav>
        <PaintingList painting={painting}/>
      </Header>
      
    </div>
  )
}


/**
 * Recipe - recipe: array
 * RecipeInfo - name: string; 
 *              icon: element;
 *              time: string;
 *              servings: number;
 *              calories: number;
 *              img: string;
 *              difficulty: number;
 */


