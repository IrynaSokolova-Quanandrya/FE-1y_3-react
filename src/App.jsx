import { Routes, Route, NavLink } from 'react-router-dom';
import GreatsPage from './Pages/GreatsPage';
import CatsPage from './Pages/CatsPage';
import NotFoundPage from './Pages/NotFoundPage';
import './App.css'
import CatDetailPage from './Pages/CatDitailsPage';
import Layout from './Pages/Layout';
/**
 * 1 - бібліотека react-router-dom+
 * 2 - встановлюємо собі на проєкт+
 * 3 - BrowserRouter+
 * 4 - Структура URL-рядка+
 * 5 - <Route path="/about" element={<About />} />+
 * 6 - сторінка помилки навігації <Route path="*" element={<NotFound />} />+
 * 7 - Компоненти <Link> та <NavLink>+
 * 8 - <Route path="/blog/:postId" element={<BlogPost />} />
 * 9 - Хук useParams
 * 10 - Вкладені маршрути
 * 11 - <Outlet>
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





