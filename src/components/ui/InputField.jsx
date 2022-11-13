// react & misc
import PropTypes from "prop-types";
import { motion } from "framer-motion";

// material ui
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

// redux
import { loginActions } from "../../store/login-slice";
import { useDispatch, useSelector } from "react-redux";

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

const InputField = ({ id, children, color, type, variant }) => {
     // redux
     const dispatch = useDispatch();

     // login redux values
     const usernameValue = useSelector((state) => state.login.usernameValue);
     const passwordValue = useSelector((state) => state.login.passwordValue);
     const usernameBlur = useSelector((state) => state.login.usernameBlur);
     const passwordBlur = useSelector((state) => state.login.passwordBlur);
     const usernameIsValid = useSelector(
          (state) => state.login.usernameIsValid
     );
     const passwordIsValid = useSelector(
          (state) => state.login.passwordIsValid
     );

     // update current state to input value
     const handleOnChange = (e) => {
          if (id === "password") {
               dispatch(loginActions.changePasswordValue(e.target.value));
          } else {
               dispatch(loginActions.changeUsernameValue(e.target.value));
          }
     };

     // change blur state
     const handleOnBlur = () => {
          if (id === "password") {
               dispatch(loginActions.togglePasswordBlur());
               dispatch(loginActions.checkPassword(passwordValue));
          } else {
               dispatch(loginActions.toggleUsernameBlur());
               dispatch(loginActions.checkUsername(usernameValue));
          }
     };

     // change helper text depending on what type it is
     let helperText = "";
     if (id === "password") {
          helperText = "Password must contain 5 characters";
     } else {
          helperText = `Please enter a valid ${id}`;
     }

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
               error={id === "password" ? !passwordIsValid : !usernameIsValid}
               onChange={handleOnChange}
               onBlur={handleOnBlur}
               variant={variant}
               value={id === "password" ? passwordValue : usernameValue}
               helperText={
                    id === "password"
                         ? !passwordIsValid && helperText
                         : !usernameIsValid && helperText
               }
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
     variant: PropTypes.string,
};

export default InputField;
