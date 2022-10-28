// react and misc
import { Fragment } from "react";
import PropTypes from "prop-types";

// material ui
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const Decal = ({ color1, color2 }) => {
    return (
        <Fragment>
            <AutoAwesomeRoundedIcon
                color={color1}
                sx={{
                    fontSize: "600px",
                    transform: "translate(140px, -300px)",
                }}
            />
            <AutoAwesomeRoundedIcon
                color={color2}
                sx={{
                    fontSize: "600px",
                    transform: "translate(155px, -920px)",
                }}
            />
        </Fragment>
    );
};

Decal.propTypes = {
    color1: PropTypes.string.isRequired,
    color2: PropTypes.string.isRequired,
};

export default Decal;
