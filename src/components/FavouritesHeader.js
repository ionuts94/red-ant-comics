// React
import React from 'react'

// Redux
import { useDispatch } from 'react-redux';
import { setShowFavourites } from '../redux/app';

const FavouritesHeader = () => {
  const dispatch = useDispatch(); 

  return (
    <div className="favourites-header">
      <h2>Favourites</h2>
      <button 
        onClick={() => dispatch(setShowFavourites(false))}
        className="close js-close" 
      />
    </div>
  )
}

export default FavouritesHeader