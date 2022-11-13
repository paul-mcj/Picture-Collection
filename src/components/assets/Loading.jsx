// react and misc.
import { useEffect } from "react";

// material ui
// fixme: linear progress in top of app??
// import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";

// redux
import { useDispatch } from "react-redux";
import { loadingActions } from "../../store/loading-slice";

// create slice for redux state
const Loading = () => {
     //redux
     const dispatch = useDispatch();

     // create artificial timer to show loading component for 2 secs.
     useEffect(() => {
          const timer = setTimeout(() => {
               dispatch(loadingActions.toggleIsLoading());
          }, 2000);
          return () => {
               clearTimeout(timer);
          };
     }, [dispatch]);

     return (
          <CircularProgress
               size={24}
               sx={{
                    color: "black",
                    position: "relative",
                    right: "0%",
               }}
          />
     );
};

export default Loading;
