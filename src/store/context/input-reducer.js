// utils
import { isInputValid } from "../../utils/functions";

// initial reducer state
const initialInputState = {
     inputValue: "",
     inputBlur: false,
     inputIsValid: true,
};

const inputReducer = (state, action) => {
     switch (action.type) {
          case "INPUT":
               return {
                    ...state,
                    inputValue: action.payload,
                    inputIsValid: isInputValid(action.payload),
               };
          case "BLUR":
               return {
                    ...state,
                    inputBlur: true,
                    inputIsValid: isInputValid(state.inputValue),
               };
          default:
               return state;
     }
};

export { inputReducer, initialInputState };
