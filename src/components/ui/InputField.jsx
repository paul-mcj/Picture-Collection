// react & misc
import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";

// material ui
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

// hooks
import useInputField from "../../hooks/useInputField";

// fixme: password fields need visible/not visible state, and animation needs to "pop out" the field when in focus. Also, needs own validation depending on type (so passwords need regex, image needs url, etc.).

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

const InputField = ({ id, children, color, isError, type, variant }) => {
     // use custom hook
     const { inputValue, inputIsValid, handleOnChange, handleBlur } =
          useInputField();

     // change helper text depending on what type it is
     const inputType = (id) => {
          if (id === "password") return "Password must contain 5 characters";
          else if (id === "url") return "Please enter a valid url";
          else {
               return `Please enter a valid ${id}`;
          }
     };

     // only show helper text if there is an error
     let helperText = !inputIsValid && inputType(id);

     // pass value to parent
     // isError(inputIsValid);

     return (
          <TextField
               margin="dense"
               color={color === "Sign Up" ? "secondaryShade1" : "primaryShade1"}
               id={id}
               type={type}
               multiline={id === "description" ? true : false}
               label={
                    !variant &&
                    id[0].toUpperCase() + id.substring(1).toLowerCase()
               }
               error={!inputIsValid}
               onChange={handleOnChange}
               onBlur={handleBlur}
               variant={variant}
               value={inputValue}
               helperText={helperText}
               InputProps={{
                    startAdornment: (
                         <InputAdornment position="start">
                              {children}
                         </InputAdornment>
                    ),
               }}
          />
     );
};

InputField.propTypes = {
     id: PropTypes.string.isRequired,
     type: PropTypes.string,
     children: PropTypes.node,
     isError: PropTypes.func,
     variant: PropTypes.string,
};

export default InputField;
