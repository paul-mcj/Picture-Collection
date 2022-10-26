// react router dom
import { Link } from "react-router-dom";

// material ui
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";

// components
import NavButton from "../ui/NavButton";

const MainNav = () => {
    return (
        <header>
            {/* fixme: style title up! */}
            <Typography variant="h3">Picture Collection</Typography>
            <AppBar position="static">
                <Toolbar>
                    <Grid container justifyContent="space-evenly" alignItems="center">
                        <Link to="/">
                            <NavButton text="All Pictures" />
                        </Link>
                        <Link to="/new-picture">
                            <NavButton text="New Picture" />
                        </Link>
                        <Link to="/favourites">
                            <NavButton text="Favourites" />
                        </Link>
                    </Grid>
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default MainNav;
