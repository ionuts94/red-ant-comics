// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Components
import ComicsContainer from './ComicsContainer';

const Comics = () => {
  const comicsData = useSelector(state => state.app.data);

  return (
    <main className="site-content">
      <ComicsContainer comicsData={comicsData} />
    </main>
  )
}

export default Comics;