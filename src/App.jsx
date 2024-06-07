import { Routes, Route, NavLink } from 'react-router-dom';
import GreatsPage from './Pages/GreatsPage';
import CatsPage from './Pages/CatsPage';
import NotFoundPage from './Pages/NotFoundPage';
import './App.css'
import CatDetailPage from './Pages/CatDitailsPage';
import Layout from './Pages/Layout';
/**
 * 1 - Вкладені шляхи
 * 2 - useSearchParams:
 *      -get
 *      -setSearchParams
 *      -контрольований елемент input
 *      -записуємо {} якщо параметру намає
 *      -записуємо "" якщо інпут пустий
 * 3 - useLocation (location.state?.from ?? ''/cats) юзаєм Елвіса
 * 4 - useNavigate
 * 5 - 
 * 
 */

export function App() {
  return(
    <div>
      <Routes>
        <Route path='/' element={<Layout/> }>
          <Route index element={<GreatsPage/>} />
          <Route path='cats' element={<CatsPage />} /> 
          <Route path='cats/:catId' element={<CatDetailPage/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      
    </div>
  )
}





