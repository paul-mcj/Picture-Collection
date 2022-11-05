// react and misc.
import React from "react";
import ReactDOM from "react-dom/client";

// material ui
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

// react router dom
import { BrowserRouter } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import store from "./store/redux-logic";

// components
import App from "./App";

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
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
