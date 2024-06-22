import { useState } from 'react';
import CatItem from '../Components/CatItem';
import { useSearchParams, useLocation, Link} from 'react-router-dom';

const CatsPage = () => {
    const [cats, setCats] = useState(['cat-1', 'cat-2', 'cat-3', 'cat-4']);
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams()
    const catId = searchParams.get('name') ?? ''


    const updateQueryString = (e) => {
        if (e.target.value !== '') {
          return  setSearchParams({name: e.target.value})
        }
        setSearchParams({})
    }

    const visibleCats = () => {
        return cats.filter(cat=>cat.includes(catId))
    }


    return (
        <>
            <h2>Cats</h2>
            
            <input type="text" value={ catId } onChange={updateQueryString}/>
            <ul>
                {visibleCats().map(cat => {
                    return (
                        <li key={cat}>
                            <Link
                                to={`${cat}`}
                                key={cat}
                                cat={cat}
                                state={{ from: location }}>{cat}</Link>
                        </li>
                        
                    )
                })}
            </ul>

            
        </>
        
    )
}

export default CatsPage;