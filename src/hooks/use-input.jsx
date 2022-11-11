// react
import { useReducer } from "react";
import {
     initialInputState,
     inputReducer,
} from "../store/context/input-reducer";

const useInput = () => {
     // reducer for state management
     const [state, dispatch] = useReducer(inputReducer, initialInputState);

     return { state, dispatch };
};

export default useInput;
