import './App.css';
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


