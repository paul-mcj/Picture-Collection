// redux
import { createSlice } from "@reduxjs/toolkit";

// init object value for state slice
const initialAuthorizationState = { isAuthorized: false };

// create slice for redux state
const authorizationSlice = createSlice({
    name: "authorization",
    initialState: initialAuthorizationState,
    reducers: {
        login(state) {
            state.isAuthorized = true;
        },
        logout(state) {
            state.isAuthorized = false;
        },
    },
});

// specifically grab slice actions
const authorizationActions = authorizationSlice.actions;

export { authorizationActions, authorizationSlice };

// logic for signing in app :
// validation that a string of at least one char was put into both username and password fields
// check if username even exists on firebase (if not, should explain that username doesn't exist and recommend to create a new account )
// if username does exist on firebase, then make sure the correct password is linked to that username (if it is, log them in and start on all that users pictures in the <AllPictures /> component)
// if password is wrong, tell them to try again...

// logic for creating a new account :
// have them go through a stepper component putting in fields (check that the username is not already taken on firebase, the password and password re-entry not only match but adhere to a regex, ask them to select a radio option of a common theme like sport, food, etc.)
// once all is said and done, append new user and their password to firebase (tell them to revert to sign in app)
