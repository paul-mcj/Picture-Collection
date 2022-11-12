// redux
import { createSlice } from "@reduxjs/toolkit";

// utils
import { isInputValid, populateInit } from "../utils/functions";

// init object value for state slice
const initialLoginState = populateInit(["username", "password"]);
console.log(initialLoginState);

// create slice for redux state
const loginSlice = createSlice({
     name: "login",
     initialState: initialLoginState,
     reducers: {
          changeUsernameValue(state, action) {
               state.usernameValue = action.payload;
          },
          changePasswordValue(state, action) {
               state.passwordValue = action.payload;
          },
          toggleUsernameBlur(state) {
               state.usernameBlur = true;
          },
          togglePasswordBlur(state) {
               state.passwordBlur = true;
          },
          checkUsername(state) {
               state.usernameIsValid = isInputValid(state.usernameValue);
          },
          checkPassword(state) {
               state.passwordIsValid = isInputValid(state.passwordValue);
          },
          resetUsernameValue(state) {
               state.usernameValue = initialLoginState.usernameValue;
          },
          resetPasswordValue(state) {
               state.passwordValue = initialLoginState.passwordValue;
          },
     },
});

// specifically grab action creators
const loginActions = loginSlice.actions;

export { loginActions, loginSlice };
