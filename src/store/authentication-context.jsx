// react and misc.
import PropTypes from "prop-types";
import { createContext, useState } from "react";

const AuthenticationContext = createContext({
    isLoggedIn: false,
});

const AuthenticationContextProvider = ({ children }) => {
    // check if user is logged in (false by default)
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    // update context object for JSX
    const context = {
        isUserLoggedIn,
    };

    return (
        <AuthenticationContext.Provider value={context}>{children}</AuthenticationContext.Provider>
    );
};

AuthenticationContext.PropTypes = {
    children: PropTypes.node.isRequired,
};

export { AuthenticationContextProvider, AuthenticationContext };

// logic for signing in app :
// validation that a string of at least one char was put into both username and password fields
// check if username even exists on firebase (if not, should explain that username doesn't exist and recommend to create a new account )
// if username does exist on firebase, then make sure the correct password is linked to that username (if it is, log them in and start on all that users pictures in the <AllPictures /> component)
// if password is wrong, tell them to try again...

// logic for creating a new account :
// have them go through a stepper component putting in fields (check that the username is not already taken on firebase, the password and password re-entry not only match but adhere to a regex, ask them to select a radio option of a common theme like sport, food, etc.)
// once all is said and done, append new user and their password to firebase (tell them to revert to sign in app)
