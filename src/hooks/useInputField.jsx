// material ui
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

// react & misc
import PropTypes from "prop-types";
import { useState } from "react";

// fixme: anytime an inputfield is focused, it needs to be highlighted in the correct color (login page is orange, sign up page is blue, maincontenct can stay primary orange), the icon in adornment has state depending on if the user typed in anything or not (empty vs. filled icons), password fields need visible/not visible state, and animation needs to "pop out" the field when in focus. Also, needs own validation depending on type (so passwords need regex, image needs url, etc.).

const InputField = ({
    id,
    label,
    type,
    multiline,
    error,
    onChange,
    onBlur,
    helperText,
    children,
    color,
}) => {
    // state will outline input field with correct color when focused
    const [focus, setFocus] = useState(false);

    // update focus state
    const onFocus = (e) => {
        setFocus(() => !focus);
    };

    return (
        <TextField
            style={{ maxWidth: "100%" }}
            margin="dense"
            id={id}
            label={label}
            type={type}
            multiline={multiline}
            error={error}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            isEmpty={empty}
            helperText={helperText}
            InputProps={{
                startAdornment: <InputAdornment position="start">{children}</InputAdornment>,
            }}
            color={color}
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
    children: PropTypes.node,
    color: PropTypes.string.isRequired,
};

export default InputField;
