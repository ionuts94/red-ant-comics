// React
import React from "react";

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { handleFavourites } from '../redux/app';

const ComicCard = ({ item }) => {
    const dispatch = useDispatch();
    const isFavourite = useSelector(state => state.app?.favourites?.find(character => character.id === item.id));
    const imgUrl = `${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`;

    return (
        <>
        {
            <li className="comic-item">
                <div className="comic-card">
                    <img src={imgUrl} />
                    <h2>{item.title}</h2>
                    <button 
                        className="button js-add"
                        onClick={() => dispatch(handleFavourites(item))}
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