// react and misc.
import React from "react";
import ReactDOM from "react-dom/client";

// material ui
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

// react router dom
import { BrowserRouter } from "react-router-dom";

// components
import App from "./App";

// context
import { AuthenticationContextProvider } from "./store/authentication-context";

// fixme: create dark theme for application ?
const darkTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#fffffc",
        },
        primary: {
            main: "#ffb414",
        },
        secondary: {
            main: "#0087ff",
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthenticationContextProvider>
                <ThemeProvider theme={darkTheme}>
                    <App />
                </ThemeProvider>
            </AuthenticationContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
