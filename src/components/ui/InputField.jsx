// material ui
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";

// react & misc
import PropTypes from "prop-types";

const InputField = ({
    id,
    label,
    type,
    multiline,
    error,
    onChange,
    onBlur,
    onFocus,
    helperText,
    children,
}) => {
    return (
        <TextField
            margin="dense"
            id={id}
            label={label}
            type={type}
            multiline={multiline}
            error={error}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            helperText={helperText}
            InputProps={{
                startAdornment: <InputAdornment position="start">{children}</InputAdornment>,
            }}
        />
    );
};

InputField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    multiline: PropTypes.bool,
    error: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    helperText: PropTypes.string,
    children: PropTypes.node,
};

export default InputField;
