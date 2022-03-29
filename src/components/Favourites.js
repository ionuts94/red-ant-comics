// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Componenets
import FavouritesHeader from './FavouritesHeader';
import FavouritesContainer from './FavouritesContainer';

const Favourites = () => {
  const showFavourites = useSelector(state => state.app.showFavourites);
  
  return (
    <div id="favourites-panel" className={`favourites-panel ${showFavourites ? 'open' : null}`}>
      <FavouritesHeader />
      <FavouritesContainer />
    </div>
  )
}

export default Favourites