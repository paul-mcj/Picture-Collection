// redux
import { createSlice } from "@reduxjs/toolkit";

// utils
import { isInputValid, populateInit } from "../utils/functions";

// init object value for state slice
const initialLoginState = populateInit([
     "username",
     "password",
     "confirmPassword",
]);
Object.assign(initialLoginState, {
     userProfiles: "",
     animationSwipeDistanceX: 0,
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
     },
});

// specifically grab action creators
const loginActions = loginSlice.actions;

export { loginActions, loginSlice };
