import { useState, createContext } from "react";

export const context = createContext();

const Context = (prop) => {
    const key = '5GOasYnFLMF68BLPSXiBgOFuyP30kFi4jKzZ7cxY7ueucJkfkgUlILGp';
    const popularPhoto = 'https://api.pexels.com/v1/curated';
    const popularVideo = 'https://api.pexels.com/videos/popular';
    const searchVideo = 'https://api.pexels.com/videos/search';
    const searchPhoto = 'https://api.pexels.com/v1/search';
    const photoId = 'https://api.pexels.com/v1/photos/';
    const videoId = 'https://api.pexels.com/videos/videos/';

    const [ favorites, setFavorites ] = useState([]);

    const obj = {
        key, popularPhoto, popularVideo, searchVideo, searchPhoto,
        favorites, setFavorites, photoId, videoId
    };
    
    return (
        <context.Provider value={obj}>
            {prop.children}
        </context.Provider>
    )
}

export default Context