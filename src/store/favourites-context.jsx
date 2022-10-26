// react & misc
import PropTypes from "prop-types";
import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favourites: [],
});

// fixme: store if picture is favourited or not on server when it occurs, so that when a user loads their images it will show their favourited images, and any images they have added to the <AllPictures />
const FavouritesContextProvider = ({ children }) => {
    // state to house array of favourite pictures (empty by default)
    const [favPics, setFavPics] = useState([]);

    // determine if a picture is favourited or not
    const isFavouritePicture = (picture) => {
        if (picture.fav === true) return true;
        return false;
    };

    // add a new favourite picture to state
    const addFavouritePicture = (picture) => {
        setFavPics((prev) => {
            return [...prev, picture];
        });
    };

    // remove a favourite picture from state
    const removeFavouritePicture = (pictureObj) => {
        let tempArr = [...favPics];
        let found;

        // fixme: try catch?
        if (isFavouritePicture(pictureObj)) {
            found = tempArr.indexOf(pictureObj);
            // remove found picture from tempArr
            tempArr.splice(found, 1);
            // now update state
            setFavPics((prev) => {
                return tempArr;
            });
        } else {
            console.log("not a fav picture!!");
        }

        console.log(favPics);
    };

    // object that updates context as individual state updates are made
    const context = {
        favourites: favPics,
        addFavouritePicture,
        removeFavouritePicture,
        isFavouritePicture,
    };

    return <FavouritesContextProvider value={context}>{children}</FavouritesContextProvider>;
};

FavouritesContext.PropTypes = {
    children: PropTypes.number.isRequired,
};

export { FavouritesContextProvider, FavouritesContext };
