// components
import AllPictures from "./AllPictures";
import Favourites from "./Favourites";
import MainNav from "../components/layout/MainNav";
import About from "./About";

// react router dom
import { Route, Routes } from "react-router-dom";

// material ui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const MainContent = () => {
     return (
          <main>
               <Typography component="header">Picture Collection</Typography>
               {/* fixme:  all these components depend on current context: */}
               {/* login page with easy graphics and validation, before fetching data*/}
               {/* create account page with stepper mui component, graphics, frame-motion animations, etc.*/}

               {/* all pages are held to the same consistent padding -- fixme: adjust once masonry is applied??*/}
               <Box sx={{ mx: { xs: "50px", md: "200px" } }}>
                    {/* fixme: animate routes to horizontal swipe */}
                    <Routes>
                         {/* default path to <AllPictures />*/}
                         {/* fixme: there should be dynamic routing in url to go to a specific user and then their /favourites, /about, etc.. */}
                         {/* fixme: add logic that if user is not logged in and authorized, not found will always be routed to!!! ie. no user can modify the url just to see another users data*/}
                         <Route path="/" exact element={<AllPictures />} />
                         <Route path="/favourites" element={<Favourites />} />
                         <Route path="/about" element={<About />} />
                    </Routes>
               </Box>
               {/* fixme: BottomNavigation and FAB on mobile screen? add cool scroll animations with framer motion!! */}
               <MainNav />
          </main>
     );
};

export default MainContent;
