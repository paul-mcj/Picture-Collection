// components
import Decal from "./Decal";

// react and misc.
import PropTypes from "prop-types";

// react router dom
import { Link } from "react-router-dom";

// material ui
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

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
        <div style={{ position: "relative" }}>
            <Decal color1={color1} color2={color2} />
            <div style={{ position: "absolute", zIndex: 5, top: "10%" }}>
                <Typography component="header" sx={{ fontSize: "40px" }}>
                    {header}
                </Typography>
                {subText && <Typography>{subText}</Typography>}
                {children}
                <Fab variant="extended" sx={fabSx}>
                    {fabText}
                    <EastOutlinedIcon sx={{ ml: 1 }} />
                </Fab>
                <Typography>
                    {ctaText}
                    <Link to={link}>{linkText}</Link>
                </Typography>
            </div>
        </div>
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
