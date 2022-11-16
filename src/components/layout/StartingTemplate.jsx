// components
import Decal from "./Decal";

// react and misc.
import PropTypes from "prop-types";
import { Fragment } from "react";

// react router dom
import { Link } from "react-router-dom";

// material ui
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// redux
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../../store/login-slice";

// fixme: framer motion animation, when flipping between these two pages add a flip along the x-axis or z-axis

const StartingTemplate = ({
     color1,
     color2,
     header,
     subText,
     children,
     ctaText,
     link,
     linkText,
}) => {
     // redux
     const dispatch = useDispatch();

     // login redux
     const distance = useSelector(
          (state) => state.login.animationSwipeDistanceX
     );

     return (
          <Fragment>
               {/* <Decal color1={color1} color2={color2} /> */}
               <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    style={{
                         maxWidth: "80%",
                         position: "absolute",
                         zIndex: 5,
                         top: "0",
                         // height: "98vh",
                         //fixme: changes to grid, as signup and login pages need different vertical spacing/height
                    }}
               >
                    <Typography component="header" sx={{ fontSize: "40px" }}>
                         {header}
                    </Typography>
                    {subText && <Typography>{subText}</Typography>}
                    {children}
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
     subText: PropTypes.string,
     children: PropTypes.node.isRequired,
     ctaText: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
     linkText: PropTypes.string.isRequired,
};

export default StartingTemplate;
