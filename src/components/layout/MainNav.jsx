// react router dom
import { Link } from "react-router-dom";

// react and misc
import { useState } from "react";

// material ui
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigation from "@mui/material/BottomNavigation";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import Paper from "@mui/material/Paper";

const MainNav = () => {
     // state to determine what page is current (<AllPictures /> by default)
     const [page, setPage] = useState("all-pictures");

     // change pages
     const onChange = (e, newPage) => {
          setPage(() => newPage);
     };

     return (
          <nav>
               <Paper
                    sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
                    elevation={3}
               >
                    <BottomNavigation value={page} onChange={onChange}>
                         <BottomNavigationAction
                              label="All Pictures"
                              value="all-pictures"
                              icon={<HomeIcon />}
                              component={Link}
                              to="all-pictures"
                         />
                         <BottomNavigationAction
                              label="Favourites"
                              value="favourites"
                              icon={<FavoriteIcon />}
                              component={Link}
                              to="favourites"
                         />
                         <BottomNavigationAction
                              label="About"
                              value="about"
                              icon={<InfoIcon />}
                              component={Link}
                              to="about"
                         />
                    </BottomNavigation>
               </Paper>
          </nav>
     );
};

export default MainNav;
