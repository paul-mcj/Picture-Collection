// components
import AllPictures from "./pages/AllPictures";
import NewPicture from "./pages/NewPicture";
import Favourites from "./pages/Favourites";
import MainNav from "./components/layout/MainNav";
import Toast from "./components/ui/Toast";

// react router dom
import { Route, Routes } from "react-router-dom";

// material UI
import { Box, ThemeProvider, createTheme } from "@mui/material";

// create dark theme and call it in <App /> component
const darkTheme = createTheme({
    palette: { mode: "dark" },
});

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <MainNav />

            {/* all pages are held to the same consistent padding */}
            <Box sx={{ mx: { xs: "50px", md: "200px" } }}>
                <Routes>
                    {/* handle default path to AllPictures, notice how the path is explicitly set with a prop called "exact"*/}
                    <Route path="/" exact element={<AllPictures />} />
                    <Route path="/new-picture" element={<NewPicture />} />
                    <Route path="/favourites" element={<Favourites />} />
                </Routes>
            </Box>
            <Toast />
        </ThemeProvider>
    );
};

export default App;
