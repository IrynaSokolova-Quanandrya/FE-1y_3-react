import {useParams, Link, Outlet, useNavigate, NavLink} from 'react-router-dom'

const CatDetailPage = () => {
    const { catId } = useParams();  
    const navigate = useNavigate()

    return (
        <>
            <h1>Cat: {catId}</h1>
            <Link to='/cats'>Go back</Link>
            <button type='button' onClick={()=>navigate('/', {replace: true})}>На головну</button>
            <ul>
                <li><NavLink to='description'>Description</NavLink></li>  
                <li><NavLink to='breeds_history'>History</NavLink></li> 
            </ul>
            
            <Outlet/>
        </>
    )
}

export default CatDetailPage;