// redux
import { configureStore } from "@reduxjs/toolkit";
import { authorizationSlice } from "./authorization-slice";
import { loginSlice } from "./login-slice";
import { toastSlice } from "./toast-slice";
import { loadingSlice } from "./loading-slice";

const store = configureStore({
     reducer: {
          authorization: authorizationSlice.reducer,
          login: loginSlice.reducer,
          toast: toastSlice.reducer,
          loading: loadingSlice.reducer,
     },
});

export default store;
