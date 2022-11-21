// redux
import { createSlice } from "@reduxjs/toolkit";

// utils
import { isInputValid, populateInit, defineIndex } from "../utils/functions";

// init object value for state slice
const initialLoginState = populateInit([
     "username",
     "password",
     "confirmPassword",
]);
Object.assign(initialLoginState, {
     userProfiles: "",
     animationSwipeDistanceX: 0,
     interests: [],
     interestsIsValid: true,
});
console.log(initialLoginState);

// create slice for redux state
const loginSlice = createSlice({
     name: "login",
     initialState: initialLoginState,
     reducers: {
          updateAnimationSwipeDistanceX(state, action) {
               state.animationSwipeDistanceX = action.payload;
          },
          changeUsernameValue(state, action) {
               state.usernameValue = action.payload;
          },
          changePasswordValue(state, action) {
               state.passwordValue = action.payload;
          },
          changeConfirmPasswordValue(state, action) {
               state.confirmPasswordValue = action.payload;
          },
          toggleUsernameBlur(state) {
               state.usernameBlur = true;
          },
          togglePasswordBlur(state) {
               state.passwordBlur = true;
          },
          toggleConfirmPasswordBlur(state) {
               state.confirmPasswordBlur = true;
          },
          checkUsername(state) {
               state.usernameIsValid = isInputValid(state.usernameValue);
          },
          checkPassword(state) {
               state.passwordIsValid = isInputValid(state.passwordValue);
          },
          checkConfirmPassword(state) {
               state.confirmPasswordIsValid = isInputValid(
                    state.confirmPasswordValue
               );
          },
          resetUsernameValue(state) {
               state.usernameValue = initialLoginState.usernameValue;
          },
          resetPasswordValue(state) {
               state.passwordValue = initialLoginState.passwordValue;
          },
          resetConfirmPasswordValue(state) {
               state.confirmPasswordValue =
                    initialLoginState.confirmPasswordValue;
          },
          getUserProfiles(state, action) {
               state.userProfiles = action.payload;
          },
          updateInterests(state, action) {
               // find index of item in interests array
               let index = defineIndex(state.interests, action.payload);
               // if its not found, add it to state array, otherwise remove it from state array
               index === -1
                    ? state.interests.push(action.payload)
                    : state.interests.splice(index, 1);
          },
          checkInterests(state) {
               state.interests.length > 0
                    ? (state.interestsIsValid = true)
                    : (state.interestsIsValid = false);
          },
          addNewUser(state, action) {
               state.userProfiles = {
                    ...state.userProfiles,
                    [action.payload.user]: action.payload.data,
               };
          },
     },
});

// specifically grab action creators
const loginActions = loginSlice.actions;

export { loginActions, loginSlice };
