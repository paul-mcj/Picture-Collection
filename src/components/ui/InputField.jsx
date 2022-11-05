// material ui
import { TextField } from "@mui/material";

// react & misc
import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";

// material ui
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PasswordIcon from "@mui/icons-material/Password";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

// utils
import { populateInit } from "../../utils/functions";

// reducer logic for each <Form /> component
const reducer = (state, action) => {
    switch (action.type) {
        case "VALUE_CHANGE":
            return {
                ...state,
                [`${action.target}InputValue`]: action.payload,
            };
        case "IS_ERROR":
            let url;
            action.target === "image" ? (url = "url") : (url = "");
            return {
                ...state,
                [`${action.target}IsValid`]: true,
                [`${action.target}HelperText`]: `Please enter a valid ${action.target} ${url}`,
            };
        case "ERROR_RESOLVED":
            return {
                ...state,
                [`${action.target}IsValid`]: false,
                [`${action.target}HelperText`]: "",
            };
        default:
            return state;
    }
};

// anytime an <InputField /> value changes it updates the corresponding object value in the reducer object via dispatch
// const onChange = (e) => {
//     dispatch({ type: "VALUE_CHANGE", target: `${e.target.id}`, payload: e.target.value });

//     // immediately check if the new value is valid, if not show error
//     checkValueField(e.target.value, e, dispatch);
// };

// // if any <InputField /> value is empty an error is dispatched
// const onBlur = (e) => {
//     checkValueField(state[`${e.target.id}InputValue`], e, dispatch);
// };

// fixme:
// const [focus, setFocus] = useState(false);

// const xxx = (e) => {
//     setFocus(() => !focus);
// };

// let poop = "";

// focus ? (poop = 1.02) : (poop = 1);

// let elevation = (
//     <motion.div
//         initial={{ scale: 1 }}
//         animate={{ scale: `${poop}` }}
//         transition={{
//             duration: 0.5,
//         }}
//     >
//         <InputField id="username" label="Username" onFocus={xxx}>
//             <PersonIcon />
//         </InputField>
//     </motion.div>
// );

const InputField = ({ id, label, type, multiline, error, onChange, onBlur, helperText }) => {
    // const [state, dispatch] = useReducer(reducer, );

    return (
        <TextField
            margin="dense"
            id={id}
            label={label}
            type={type}
            multiline={true}
            error={true}
            onChange={onChange}
            onBlur={onBlur}
            helperText={"sjsj"}
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
