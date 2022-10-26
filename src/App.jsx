// components
import AllPictures from "./pages/AllPictures";
import Favourites from "./pages/Favourites";
import MainNav from "./components/layout/MainNav";
import About from "./pages/About";

// react router dom
import { Route, Routes } from "react-router-dom";

// material ui
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

// fixme: create dark theme and call it in <App /> component
const darkTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#ffb414",
        },
        secondary: {
            main: "#0087ff",
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Typography component="header">Picture Collection</Typography>
            {/* login page */}
            {/* create account page */}
            {/* all pages are held to the same consistent padding -- fixme: adjust once masonry is applied??*/}
            <Box sx={{ mx: { xs: "50px", md: "200px" } }}>
                <Routes>
                    {/* default path to <AllPictures />*/}
                    <Route path="/" exact element={<AllPictures />} />
                    <Route path="/favourites" element={<Favourites />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Box>
            {/* fixme: BottomNavigation and FAB on mobile screen? add cool scroll animations with framer motion!! */}
            <MainNav />
            {/* fixme: toast needs its own context? */}
            {/* <Toast /> */}
        </ThemeProvider>
    );
};

export default App;
