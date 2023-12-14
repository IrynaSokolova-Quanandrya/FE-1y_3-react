import PropTypes from 'prop-types';
import { Painting } from "../Painting/Painting";

export function PaintingList ({painting}){
    return(
        <ul>
        {painting.map(({id, title, url, quantity, price, author})=>(
            <Painting 
                key={id}
                url={url}
                title={title}
                price={price}
                quantity={quantity}
                author={author}
            />
        ))}
   </ul> 
   )
}

PaintingList.propTypes = {
    painting: PropTypes.array,
}