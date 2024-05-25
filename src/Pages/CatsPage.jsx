import { Link } from 'react-router-dom';

const CatsPage = () => {
    return (
        <>
            <h2>Cats</h2>
            <ul>
                {['cat-1', 'cat-2', 'cat-3', 'cat-4'].map(cat => {
                    return (
                        <li key={cat}>
                            <Link  to={`${cat}`}>{ cat }</Link>
                        </li>
                    )
                })}
            </ul>
        </>
        
    )
}

export default CatsPage;