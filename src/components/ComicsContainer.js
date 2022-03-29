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
                comicsData.map(result => {
                    const key = uuid();
                    return <ComicCard key={key} item={result} />
                })
            }
        </ul>
    )
}

export default ComicsContainer;