// react & misc.
import { useState } from "react";
import PropTypes from "prop-types";

// material ui
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

// fixme: might need context to bypass chaining through props
const Toast = ({ message }) => {
    // state if component is shown or not, false by default
    const [open, setOpen] = useState(() => false);

    // change state to opposite of current state
    const onClose = () => {
        setOpen(() => !open);
    };

    // variable for JSX slimming
    const action = (
        <IconButton size="small" onClick={onClose}>
            <CloseIcon fontSize="small" />
        </IconButton>
    );

    return (
        <div>
            <Button onClick={onClose} color="primary">
                click me
            </Button>
            <Snackbar
                open={open}
                onClose={onClose}
                autoHideDuration={5000}
                message={message}
                action={action}
            />
        </div>
    );
};

Toast.propTypes = {
    message: PropTypes.string,
};

export default Toast;
