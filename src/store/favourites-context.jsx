// react & misc
import PropTypes from "prop-types";
import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favourites: [],
});

const FavouritesContextProvider = ({ children }) => {
    // state to house array of favourite pictures (empty by default)
    const [favPics, setFavPics] = useState([]);

    // object that updates context as individual state updates
    const context = {
        favourites: favPics,
    };

    // add a new favourite picture to state
    const addFavouritePicture = (pic) => {
        setFavPics((prev) => {
            return [...prev, pic];
        });
    };

    return <FavouritesContextProvider value={context}>{children}</FavouritesContextProvider>;
};

FavouritesContext.PropTypes = {
    children: PropTypes.number.isRequired,
};

export default FavouritesContextProvider;
