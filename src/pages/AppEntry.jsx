// components
import Login from "./Login";
import SignUp from "./SignUp";

// react router dom
import {
     Route,
     Routes,
     Navigate,
     useNavigate,
     useLocation,
} from "react-router-dom";
import Grid from "@mui/material/Grid";

// redux
import { useSelector, useDispatch } from "react-redux";
import { loginActions, loginSlice } from "../store/login-slice";

// react and misc.
import { useState, useEffect, useRef } from "react";

// framer motion
import { motion } from "framer-motion";
// import { motion } from "framer-motion/dist/framer-motion";

const AppEntry = () => {
     // contain ref for drag constraints (for framer motion)
     const constraintsRef = useRef(null);
     // redux
     const dispatch = useDispatch();

     // login redux
     const distance = useSelector(
          (state) => state.login.animationSwipeDistanceX
     );

     // state that houses beginning and ending x axis values of the screen
     const [touchStart, setTouchStart] = useState();
     const [touchEnd, setTouchEnd] = useState();

     // state determines if a swipe has occurred
     const [isSwiped, setIsSwiped] = useState(false);

     // used for url navigation
     const navigate = useNavigate();

     // used for current url
     const location = useLocation();

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
               if (location.pathname === curPage) {
                    navigate(targetPage);
                    setIsSwiped(() => false);
                    dispatch(loginActions.updateAnimationSwipeDistanceX(0));
                    return;
               }
          };

          // if a swipe occurs, route to target page
          if (isSwiped) {
               reRoute("/app-entry/signup", "/app-entry/login");
               reRoute("/app-entry/login", "/app-entry/signup");
          }
     }, [isSwiped, location.pathname, navigate, dispatch]);

     return (
          // <motion.div initial={{ x: 0 }} animate={{ x: distance }}>
          <motion.div ref={constraintsRef}>
               <motion.div drag="x" dragConstraints={constraintsRef}>
                    <Grid
                         container
                         alignItems="center"
                         direction="column"
                         onTouchMove={handleSwipe}
                         onTouchStart={(e) => {
                              setTouchStart(() => e.touches[0].clientX);
                         }}
                    >
                         <Routes>
                              <Route
                                   path="/app-entry/login"
                                   exact
                                   element={<Login />}
                              />
                              <Route
                                   path="/app-entry/signup"
                                   exact
                                   element={<SignUp />}
                              />
                         </Routes>
                    </Grid>
               </motion.div>
          </motion.div>
     );
};

export default AppEntry;
