// redux
import { createSlice } from "@reduxjs/toolkit";

// init object value for state slice
const initialToastState = { isOpen: false, message: "", color: "" };

// create slice for redux state
const toastSlice = createSlice({
     name: "toast",
     initialState: initialToastState,
     reducers: {
          toggleIsOpen(state) {
               state.isOpen = !state.isOpen;
          },
          changeMessage(state, action) {
               state.message = action.payload;
          },
          setColor(state, action) {
               state.color = action.payload;
          },
     },
});

// specifically grab slice actions
const toastActions = toastSlice.actions;

export { toastActions, toastSlice };
