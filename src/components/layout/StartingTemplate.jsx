// components
import Decal from "./Decal";

// react and misc.
import PropTypes from "prop-types";
import { Fragment } from "react";

// react router dom
import { Link } from "react-router-dom";

// material ui
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import Grid from "@mui/material/Grid";

const StartingTemplate = ({
    color1,
    color2,
    header,
    subText,
    children,
    fabSx,
    fabText,
    ctaText,
    link,
    linkText,
}) => {
    return (
        <Fragment>
            {/* <Decal color1={color1} color2={color2} /> */}
            <Grid
                container
                direction="column"
                justifyContent="space-between"
                style={{ position: "absolute", zIndex: 5, top: "0", height: "98vh" }}
            >
                <Typography component="header" sx={{ fontSize: "40px" }}>
                    {header}
                </Typography>
                {subText && <Typography>{subText}</Typography>}
                {children}
                <Fab variant="extended" style={{ alignSelf: "flex-end" }} sx={fabSx}>
                    {fabText}
                    <EastOutlinedIcon sx={{ ml: 2 }} />
                </Fab>
                {/* <Typography style={{ position: "fixed", top: "40%" }}> */}
                <Typography style={{ alignSelf: "center" }}>
                    {ctaText}
                    <Typography
                        to={link}
                        component={Link}
                        color={color1}
                        style={{ textDecoration: "none" }}
                    >
                        {linkText}
                    </Typography>
                </Typography>
            </Grid>
        </Fragment>
    );
};

StartingTemplate.propTypes = {
    color1: PropTypes.string.isRequired,
    color2: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    fabSx: PropTypes.object.isRequired,
    subText: PropTypes.string,
    children: PropTypes.node.isRequired,
    fabText: PropTypes.string.isRequired,
    ctaText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
};

export default StartingTemplate;
