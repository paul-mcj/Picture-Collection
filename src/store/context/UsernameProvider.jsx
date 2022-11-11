// react and misc
import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

// reducer logic
import { inputReducer, initialInputState } from "./input-reducer";

// define context
const UsernameContext = createContext();

// named export for Provider
export const UsernameProvider = ({ children }) => {
     // reducer for state management
     const [state, dispatch] = useReducer(inputReducer, initialInputState);

     return (
          <UsernameContext.Provider value={{ ...state, dispatch }}>
               {children}
          </UsernameContext.Provider>
     );
};

UsernameProvider.propTypes = {
     children: PropTypes.node.isRequired,
};

// default export of defined context
export default UsernameContext;
