import { useState } from 'react';
import CatItem from '../Components/CatItem';
import { useSearchParams} from 'react-router-dom';

const CatsPage = () => {
    const [cats, setCats] = useState(['cat-1', 'cat-2', 'cat-3', 'cat-4']);

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
                        <CatItem key={cat} cat={cat}/>
                    )
                })}
            </ul>

            
        </>
        
    )
}

export default CatsPage;