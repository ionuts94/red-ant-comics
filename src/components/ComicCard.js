// React
import React from "react";

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { handleFavourites } from '../redux/app';

const ComicCard = ({ comic }) => {
    const dispatch = useDispatch();
    const isFavourite = useSelector(state => state.app?.favourites?.find(character => character.id === comic.id));
    const imgUrl = `${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`;

    return (
        <>
        {
            <li className="comic-item">
                <div className="comic-card">
                    <img src={imgUrl} />
                    <h2>{comic.title}</h2>
                    <button 
                        className="button js-add"
                        onClick={() => dispatch(handleFavourites(comic))}
                    >
                        { isFavourite 
                            ? "Remove from favourites"
                            : "Add to favourites"
                        }
                    </button>
                </div>
            </li>
        }
        </>
    )
}

export default ComicCard;