// material ui
import { TextField } from "@mui/material";

// react & misc
import PropTypes from "prop-types";

const InputField = ({ id, label, type, multiline, error, onChange, onBlur, helperText }) => {
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
            helperText={helperText}
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
    helperText: PropTypes.string,
};

export default InputField;
