// redux
import { configureStore } from "@reduxjs/toolkit";
import { authorizationSlice } from "./authorization-slice";
import { loginSlice } from "./login-slice";

const store = configureStore({
     reducer: {
          authorization: authorizationSlice.reducer,
          login: loginSlice.reducer,
     },
});

export default store;
