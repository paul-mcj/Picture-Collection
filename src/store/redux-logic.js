// redux
import { configureStore } from "@reduxjs/toolkit";
import { authorizationSlice } from "./authorization-slice";

const store = configureStore({
    reducer: {
        authorization: authorizationSlice.reducer,
    },
});

export default store;
