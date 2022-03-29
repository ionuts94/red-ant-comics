// React
import React from 'react';

// Redux
import { handleFavourites } from '../redux/app';
import { useDispatch } from 'react-redux';

// Helpers
import { v4 as uuid } from 'uuid';

const FavouriteComic = ({ comic }) => {
    const dispatch = useDispatch();
    const key = uuid();

    return (
        <li key={key}> 
            {comic.title}
            <button 
                className="remove js-remove" 
                onClick={() => dispatch(handleFavourites(comic))}
            />
        </li>
    )
  
}

export default FavouriteComic