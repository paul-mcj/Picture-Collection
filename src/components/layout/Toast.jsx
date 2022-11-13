// material ui
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";

// redux
import { useDispatch, useSelector } from "react-redux";
import { toastActions } from "../../store/toast-slice";

const Toast = () => {
     // redux
     const dispatch = useDispatch();

     // toast redux
     const isOpen = useSelector((state) => state.toast.isOpen);
     const message = useSelector((state) => state.toast.message);
     const color = useSelector((state) => state.toast.color);

     // handle closing action
     const handleOnClose = () => {
          dispatch(toastActions.toggleIsOpen());
     };

     // action param for JSX component
     const action = (
          <IconButton size="small" onClick={handleOnClose}>
               <CloseIcon fontSize="small" />
          </IconButton>
     );

     return (
          <Snackbar
               onClose={handleOnClose}
               open={isOpen}
               action={action}
               anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
               autoHideDuration={6000}
          >
               <MuiAlert
                    onClose={handleOnClose}
                    severity={color}
                    variant="filled"
               >
                    {message}
               </MuiAlert>
          </Snackbar>
     );
};

export default Toast;
