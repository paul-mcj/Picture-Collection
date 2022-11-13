// redux
import { createSlice } from "@reduxjs/toolkit";

// init object value for state slice
const initialLoadingState = { isLoading: false };

// create slice for redux state
const loadingSlice = createSlice({
     name: "loading",
     initialState: initialLoadingState,
     reducers: {
          toggleIsLoading(state) {
               state.isLoading = !state.isLoading;
          },
     },
});

// specifically grab slice actions
const loadingActions = loadingSlice.actions;

export { loadingActions, loadingSlice };
