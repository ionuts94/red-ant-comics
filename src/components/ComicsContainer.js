// React
import React from 'react'

// Components
import ComicCard from './ComicCard';

// Helpers
import { v4 as uuid } from 'uuid';

const ComicsContainer = ({ comicsData }) => {
    
    return (
        <ul id="comics-list" className="comics-list">
            {
                comicsData.map(comic => {
                    const key = uuid();
                    return <ComicCard key={key} comic={comic} />
                })
            }
        </ul>
    )
}

export default ComicsContainer;