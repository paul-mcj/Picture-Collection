// react & misc
import { useReducer } from "react";

// utils
import { isInputValid } from "../utils/functions";

// initial reducer state
const initialInputState = {
    inputValue: "",
    inputBlur: false,
    inputIsValid: true,
};

// reducer function
const inputReducer = (state, action) => {
    switch (action.type) {
        case "INPUT":
            return {
                ...state,
                inputValue: action.payload,
                inputIsValid: isInputValid(action.payload),
            };
        case "BLUR":
            return { ...state, inputBlur: true, inputIsValid: isInputValid(state.inputValue) };
        default:
            return initialInputState;
    }
};

const useInputField = () => {
    // reducer state
    const [state, dispatch] = useReducer(inputReducer, initialInputState);

    // update current state to input value
    const handleOnChange = (e) => {
        dispatch({ type: "INPUT", payload: e.target.value });
    };

    // change blur state
    const handleBlur = () => {
        dispatch({ type: "BLUR" });
    };

    return {
        inputValue: state.inputValue,
        inputIsValid: state.inputIsValid,
        handleOnChange,
        handleBlur,
    };
};

export default useInputField;
