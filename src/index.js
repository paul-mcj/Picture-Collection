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

// create theme for application
const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#ffb414",
        },
        primaryShade1: {
            main: "#e6a212",
        },
        primaryShade2: {
            main: "#cc9010",
        },
        primaryShade3: {
            main: "#b37e0e",
        },
        secondary: {
            main: "#145eff",
        },
        secondaryShade1: {
            main: "#1255e6",
        },
        secondaryShade2: {
            main: "#104bcc",
        },
        secondaryShade3: {
            main: "#0e42b3",
        },
    },
    typography: {
        allVariants: {
            fontFamily: "Poppins",
            fontSize: 16,
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthenticationContextProvider>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </AuthenticationContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
