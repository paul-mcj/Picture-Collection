// components
import Decal from "./Decal";

// react and misc.
import PropTypes from "prop-types";
import { Fragment, useState, useEffect, useRef } from "react";

// react router dom
import { Link, useNavigate, useLocation } from "react-router-dom";

// material ui
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// redux
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../../store/login-slice";

// framer motion
import { motion } from "framer-motion";

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

     // contain ref for drag constraints (for framer motion)
     const constraintsRef = useRef(null);

     // state that houses beginning and ending x axis values of the screen
     const [touchStart, setTouchStart] = useState();
     const [touchEnd, setTouchEnd] = useState();

     // state determines if a swipe has occurred
     const [isSwiped, setIsSwiped] = useState(false);

     // used for url navigation
     const navigate = useNavigate();

     // used for current url
     const location = useLocation();
     const { pathname } = location;

     // if a swipe has occurred, set swipe state
     const handleSwipe = (e) => {
          setTouchEnd(() => e.touches[0].clientX);
          dispatch(
               loginActions.updateAnimationSwipeDistanceX(
                    Math.abs(touchStart - touchEnd)
               )
          );
          distance > 200 && setIsSwiped(() => true);
     };

     useEffect(() => {
          // function navigates from current page to target page and resets the isSwiped state
          const reRoute = (curPage, targetPage) => {
               if (pathname === curPage) {
                    navigate(targetPage);
                    setIsSwiped(() => false);
                    dispatch(loginActions.updateAnimationSwipeDistanceX(0));
                    return;
               }
          };

          // if a swipe occurs, route to target page
          if (isSwiped) {
               reRoute("/signup", "/login");
               reRoute("/login", "/signup");
          }
     }, [isSwiped, pathname, navigate, dispatch]);

     return (
          <Fragment>
               {/* <Decal color1={color1} color2={color2} /> */}
               <motion.div ref={constraintsRef}>
                    <motion.div drag="x" dragConstraints={constraintsRef}>
                         <Grid
                              container
                              onTouchMove={handleSwipe}
                              onTouchStart={(e) => {
                                   setTouchStart(() => e.touches[0].clientX);
                              }}
                              direction="column"
                              justifyContent="space-between"
                              alignItems="center"
                              style={{
                                   maxWidth: "80%",
                                   position: "absolute",
                                   zIndex: 5,
                                   top: "0",
                                   minHeight: "98vh",
                              }}
                         >
                              <Typography
                                   component="header"
                                   sx={{ fontSize: "40px" }}
                              >
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
                    </motion.div>
               </motion.div>
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
