// React
import React from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { setShowFavourites } from '../redux/app';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="site-header">
      <h1 className="site-heading">Red Ant Comics</h1>
      <button 
        className="favourites-toggle js-favourites-toggle"
        onClick={() => dispatch(setShowFavourites(true))}
      />
    </header>
  )
}

export default Header