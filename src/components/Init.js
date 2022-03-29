// React
import React, { useEffect, useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { setGlobalData } from '../redux/app';

// Components
import Loader from './Loader';

// Helpers
import axios from 'axios';

const Init = ({ url, children }) => {
    const dispatch = useDispatch();
    const [isInited, setIsInited] = useState(false);
    const [content, setContent] = useState();

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(url);
                if (response.data) {
                    // url successfully fetchd and received expected response from the server
                    dispatch(setGlobalData(response.data.data.results));
                    setContent(children);
                    setIsInited(true);
                } else {
                    // url successfully fetchd but received unespected response from the server
                    setContent(<p>Response does not containe the expected values. Please check server response</p>);
                    setIsInited(true);
                }
            } catch (err) {
                // url failed to fetch
                setContent(<p>Failed to fetch. Please check url passed to init component</p>)
                setIsInited(true);
            }
        })();
    }, []);

    return isInited 
        ? content
        : <Loader />
}

export default Init