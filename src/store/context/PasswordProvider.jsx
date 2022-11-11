// react and misc
import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

// reducer logic
import { inputReducer, initialInputState } from "./input-reducer";

// define context
const PasswordContext = createContext();

// named export for Provider
export const PasswordProvider = ({ children }) => {
     // reducer for state management
     const [state, dispatch] = useReducer(inputReducer, initialInputState);

     return (
          <PasswordContext.Provider value={{ ...state, dispatch }}>
               {children}
          </PasswordContext.Provider>
     );
};

PasswordProvider.propTypes = {
     children: PropTypes.node.isRequired,
};

// default export of defined context
export default PasswordContext;
