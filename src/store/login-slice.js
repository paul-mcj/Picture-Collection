// redux
import { createSlice } from "@reduxjs/toolkit";

// utils
import { isInputValid } from "../utils/functions";

// init object value for state slice
const initialLoginState = {
     usernameValue: "",
     usernameBlur: false,
     usernameIsValid: true,
     passwordValue: "",
     passwordBlur: false,
     passwordIsValid: true,
};

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

// specifically grab slice actions
const loginActions = loginSlice.actions;

export { loginActions, loginSlice };
