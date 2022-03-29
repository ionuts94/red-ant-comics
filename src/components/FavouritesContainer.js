// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Components
import FavouriteComic from './FavouriteComic';

// Helpers
import { v4 as uuid } from 'uuid';

const FavouritesContainer =  () => {
    const favouriteComics = useSelector(state => state.app.favourites);
    
    return (
        <div className="favourites-content">
            <ul className="favourites-list">
            {
                favouriteComics.map(comic => {
                    const key = uuid();
                    return <FavouriteComic key={key} comic={comic} />
                })
            }
            </ul>
        </div>
    )
}

export default FavouritesContainer