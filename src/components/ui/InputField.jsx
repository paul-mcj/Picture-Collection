// material ui
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

// react & misc
import PropTypes from "prop-types";
import { useReducer } from "react";

// utils
import { populateInit, checkValueField } from "../../utils/functions";

const reducer = (state, action) => {
    switch (action.type) {
        case "VALUE_CHANGE": {
            return {
                ...state,
                [`${action.id}Value`]: action.payload,
            };
        }

        case "IS_ERROR":
            let url;
            action.target === "image" ? (url = "url") : (url = "");
            return {
                ...state,
                [`${action.id}Blur`]: true,
                [`${action.id}Helper`]: `Please enter a valid ${action.id} ${url}`,
            };
        case "ERROR_RESOLVED":
            return {
                ...state,
                [`${action.id}Blur`]: false,
                [`${action.id}Helper`]: "",
            };

        default:
            return state;
    }
};

// fixme: the icon in adornment has state depending on if the user typed in anything or not (empty vs. filled icons), password fields need visible/not visible state, and animation needs to "pop out" the field when in focus. Also, needs own validation depending on type (so passwords need regex, image needs url, etc.).

const InputField = ({ id, label, type, multiline, helperText, children, color }) => {
    // initialized object for unique <InputField /> component
    const init = populateInit(id);
    console.log(init);

    // reducer logic for unique <InputField /> component
    const [state, dispatch] = useReducer(reducer, init);

    // anytime an <InputField /> component value changes it updates the reducer state
    const onChange = (e) => {
        dispatch({ type: "VALUE_CHANGE", target: id, payload: e.target.value });
        console.log(state);

        // immediately check if the new value is valid, if not show error
        checkValueField(e.target.value, id, dispatch);
    };

    // if any <InputField /> component value is empty an error is dispatched
    const onBlur = (e) => {
        checkValueField(`${e.target.id}Value`, e, dispatch);
    };

    return (
        <TextField
            style={{ maxWidth: "100%" }}
            margin="dense"
            id={id}
            label={label}
            type={type}
            multiline={multiline}
            onChange={onChange}
            onBlur={onBlur}
            helperText={helperText}
            color={color}
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
    onFocus: PropTypes.func,
    helperText: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.string.isRequired,
};

export default InputField;
