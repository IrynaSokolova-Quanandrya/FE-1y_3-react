import { useEffect } from 'react';
import {useParams} from 'react-router-dom'

const CatDetailPage = () => {
    const {catId} = useParams();

    useEffect()
    console.log(catId);

    return (
        <h1>Cat: { catId }</h1>
    )
}

export default CatDetailPage;