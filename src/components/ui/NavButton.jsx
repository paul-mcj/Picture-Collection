// material ui
import { Button } from "@mui/material";

// react & misc.
import PropTypes from "prop-types";

const NavButton = ({ text }) => {
    return <Button sx={{ fontSize: { xs: "12px", md: "20px" } }}>{text}</Button>;
};

NavButton.propTypes = {
    text: PropTypes.string,
};

export default NavButton;
