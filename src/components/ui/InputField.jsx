// react & misc
import PropTypes from "prop-types";
import { Fragment } from "react";

// material ui
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

// redux
import { loginActions } from "../../store/login-slice";
import { useDispatch, useSelector } from "react-redux";

// framer motion
import { motion } from "framer-motion";

// fixme: Needs own validation depending on type (so passwords need regex, image needs url, etc.).

const InputField = ({ id, children, color, type, variant }) => {
     // redux
     const dispatch = useDispatch();

     // login redux values
     const usernameValue = useSelector((state) => state.login.usernameValue);
     const passwordValue = useSelector((state) => state.login.passwordValue);
     const confirmPasswordValue = useSelector(
          (state) => state.login.confirmPasswordValue
     );

     const usernameBlur = useSelector((state) => state.login.usernameBlur);
     const passwordBlur = useSelector((state) => state.login.passwordBlur);
     const confirmPasswordBlur = useSelector(
          (state) => state.login.confirmPasswordBlur
     );

     const usernameIsValid = useSelector(
          (state) => state.login.usernameIsValid
     );
     const passwordIsValid = useSelector(
          (state) => state.login.passwordIsValid
     );
     const confirmPasswordIsValid = useSelector(
          (state) => state.login.confirmPasswordIsValid
     );

     // update current state to input value depending on prop id
     const handleOnChange = (e) => {
          switch (id) {
               case "username":
                    dispatch(loginActions.changeUsernameValue(e.target.value));
                    break;
               case "password":
                    dispatch(loginActions.changePasswordValue(e.target.value));
                    break;
               case "confirmPassword":
                    dispatch(
                         loginActions.changeConfirmPasswordValue(e.target.value)
                    );
                    break;
               default:
                    throw new Error(
                         "<InputField /> prop id not valid for handleOnChange function"
                    );
          }
     };

     // change blur state, also depending on prop id
     const handleOnBlur = () => {
          switch (id) {
               case "username":
                    dispatch(loginActions.toggleUsernameBlur());
                    dispatch(loginActions.checkUsername(usernameValue));
                    break;
               case "password":
                    dispatch(loginActions.togglePasswordBlur());
                    dispatch(loginActions.checkPassword(passwordValue));
                    break;
               case "confirmPassword":
                    dispatch(loginActions.toggleConfirmPasswordBlur());
                    dispatch(
                         loginActions.checkConfirmPassword(confirmPasswordValue)
                    );
                    break;
               default:
                    throw new Error(
                         "<InputField /> prop id not valid for handleOnBlur function"
                    );
          }
     };

     // change helper text depending on prop id
     let helperText = "";
     switch (id) {
          case "password":
          case "confirmPassword":
               helperText = "Password must contain at least 5 characters";
               break;
          default:
               helperText = `Please enter a valid ${id}`;
     }

     // change error message depending on prop id
     let setError;
     switch (id) {
          case "username":
               setError = !usernameIsValid;
               break;
          case "password":
               setError = !passwordIsValid;
               break;
          case "confirmPassword":
               setError = !confirmPasswordIsValid;
               break;
          default:
               throw new Error(
                    "<InputField /> prop id not valid for setError value"
               );
     }

     // change value depending on prop id
     let setValue;
     switch (id) {
          case "username":
               setValue = usernameValue;
               break;
          case "password":
               setValue = passwordValue;
               break;
          case "confirmPassword":
               setValue = confirmPasswordValue;
               break;
          default:
               throw new Error(
                    "<InputField /> prop id not valid for setValue value"
               );
     }

     return (
          <Fragment>
               {/*  fixme: tapping button should not pop out input field */}
               <motion.div whileTap={{ scale: 1.2 }}>
                    <TextField
                         margin="dense"
                         color={
                              color === "Sign Up"
                                   ? "secondaryShade1"
                                   : "primaryShade1"
                         }
                         id={id}
                         type={type}
                         multiline={id === "description" ? true : false}
                         label={
                              !variant &&
                              id[0].toUpperCase() +
                                   id.substring(1).toLowerCase()
                         }
                         error={setError}
                         onChange={handleOnChange}
                         onBlur={handleOnBlur}
                         variant={variant}
                         value={setValue}
                         helperText={setError && helperText}
                         InputProps={{
                              startAdornment: (
                                   <InputAdornment position="start">
                                        {children}
                                   </InputAdornment>
                              ),
                         }}
                    />
               </motion.div>
          </Fragment>
     );
};

InputField.propTypes = {
     id: PropTypes.string.isRequired,
     type: PropTypes.string,
     children: PropTypes.node,
     variant: PropTypes.string,
};

export default InputField;
