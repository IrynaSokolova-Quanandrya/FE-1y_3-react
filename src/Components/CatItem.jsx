import { Link, useLocation } from "react-router-dom"


const CatItem = ({ cat }) => {
    console.log(useLocation());
    return (
        <li key={cat}>
        <Link  to={`${cat}`}>{ cat }</Link>
        </li>
    )
}

export default CatItem