import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import './App.css'

const GreatsPage = lazy(()=>import('./Pages/GreatsPage.jsx'))
const CatsPage = lazy(() => import('./Pages/CatsPage.jsx'))
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage.jsx'))
const CatDetailPage = lazy(() => import('./Pages/CatDitailsPage.jsx'))
const Layout = lazy(() => import('./Pages/Layout.jsx'))
/**
 * 1 - Вкладені шляхи+
 * 2 - useSearchParams:
 *      -get+
 *      -setSearchParams+
 *      -контрольований елемент input+
 *      -записуємо {} якщо параметру намає+
 *      -записуємо "" якщо інпут пустий+
 * 3 - useLocation (location.state?.from ?? ''/cats) юзаєм Елвіса
 * 4 - useNavigate+
 * 5 - Lazy+
 * 
 */
export function App() {
  return(
    <div>
      <Routes>
        <Route path='/' element={<Layout/> }>
          <Route index element={<GreatsPage/>} />
          <Route path='cats' element={<CatsPage />} /> 
          <Route path='cats/:catId' element={<CatDetailPage />} >
            <Route path='description' element={<p>Опис котика</p>} />
            <Route path='breeds_history' element={<p>Історія породи</p>} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>      
    </div>
  )
}





