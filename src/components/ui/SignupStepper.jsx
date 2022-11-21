// material ui
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

// react & misc
import { useState, useEffect } from "react";

// hooks
import useHttp from "../../hooks/use-http";

// utils
import { isInputValid } from "../../utils/functions";

// components
import UsernameField from "./UsernameField";
import PasswordField from "./PasswordField";
import ConfirmPasswordField from "./ConfirmPasswordField";

// redux
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/login-slice";
import { toastActions } from "../../store/toast-slice";

const SignupStepper = () => {
     // redux
     const dispatch = useDispatch();

     // destructure custom http hook
     const { getRequest } = useHttp();

     // login redux values
     const usernameIsValid = useSelector(
          (state) => state.login.usernameIsValid
     );
     const passwordIsValid = useSelector(
          (state) => state.login.passwordIsValid
     );
     const confirmPasswordIsValid = useSelector(
          (state) => state.login.confirmPasswordIsValid
     );
     const usernameValue = useSelector((state) => state.login.usernameValue);
     const passwordValue = useSelector((state) => state.login.passwordValue);
     const confirmPasswordValue = useSelector(
          (state) => state.login.confirmPasswordValue
     );
     const interestsIsValid = useSelector(
          (state) => state.login.interestsIsValid
     );
     const interests = useSelector((state) => state.login.interests);
     const userProfiles = useSelector((state) => state.login.userProfiles);

     // active step is 0 by default
     const [activeStep, setActiveStep] = useState(0);

     // the next button in the <Stepper /> and its logic
     const handleNext = () => {
          // if the event identifier is from the <Username /> component check userProfiles to see if user exists already
          let tryUser = Object.hasOwn(userProfiles, usernameValue);
          // if user exists, that means they need to pick a new username, display an error toast
          if (tryUser) {
               dispatch(
                    toastActions.changeMessage(
                         `User ${usernameValue} already exists. Please choose another username.`
                    )
               );
               dispatch(toastActions.setColor("error"));
               dispatch(toastActions.toggleIsOpen());
               return;
          }
          // if password and confirm password fields aren't exact matches, show error toast
          if (
               isInputValid(confirmPasswordValue) &&
               passwordValue !== confirmPasswordValue
          ) {
               dispatch(
                    toastActions.changeMessage(
                         `Invalid entry. Please make sure your password is re-entered correctly.`
                    )
               );
               dispatch(toastActions.setColor("error"));
               dispatch(toastActions.toggleIsOpen());
               // also reset confirmPassword
               dispatch(loginActions.resetConfirmPasswordValue());
               return;
          }
          // all other components calling this function can continue in stepper
          else {
               setActiveStep((prev) => prev + 1);
               // fixme: these disptaches need to be placed more accurately
               // dispatch(loginActions.toggleUsernameBlur());
               // dispatch(loginActions.togglePasswordBlur());
               // dispatch(loginActions.toggleConfirmPasswordBlur());
          }
     };

     // the back button always changes state
     const handleBack = () => {
          setActiveStep((prev) => prev - 1);
     };

     // update redux state of interests when user checks/unchecks a box
     const handleCheckboxOnChange = (interest) => {
          dispatch(loginActions.updateInterests(interest));
     };

     // immediately fetch all users when component loads
     //    fixme: useCallback wrap?
     useEffect(() => {
          userProfiles === "" && getRequest();
     }, [userProfiles, getRequest]);

     return (
          <Stepper activeStep={activeStep} orientation="vertical">
               <Step>
                    <StepLabel error={!usernameIsValid}>
                         Create a username
                    </StepLabel>
                    <StepContent>
                         <UsernameField variant="standard" />
                         {/* continue button only shows up when field is valid (at least one character is there)*/}
                         {isInputValid(usernameValue) && (
                              <Button onClick={handleNext}>Continue</Button>
                         )}
                    </StepContent>
               </Step>

               <Step>
                    <StepLabel error={!passwordIsValid}>
                         Enter a password
                    </StepLabel>
                    <StepContent>
                         <PasswordField variant="standard" />
                         {/* "continue" button only shows if field is valid (at least 5 chars)*/}
                         {isInputValid(passwordValue) && (
                              <Button onClick={handleNext}>Continue</Button>
                         )}
                         {/* back button is always shown */}
                         <Button onClick={handleBack}>Back</Button>
                    </StepContent>
               </Step>
               <Step>
                    <StepLabel error={!confirmPasswordIsValid}>
                         Re-enter password
                    </StepLabel>
                    <StepContent>
                         <ConfirmPasswordField variant="standard" />
                         {/* continue button only allowed if it matched the above password field */}
                         {isInputValid(confirmPasswordValue) && (
                              <Button onClick={handleNext}>Continue</Button>
                         )}
                         {/* back button is always shown */}
                         <Button onClick={handleBack}>Back</Button>
                    </StepContent>
               </Step>
               <Step
                    sx={{
                         "& .MuiStepLabel-root .Mui-active": {
                              color: "secondaryShade1.main",
                         },
                    }}
               >
                    <StepLabel error={!interestsIsValid}>
                         What are your interests?
                    </StepLabel>
                    <StepContent>
                         <Typography>
                              Your account will automatically have some photos
                              based on your selected interests! Choose at least
                              (1):
                         </Typography>
                         <FormGroup>
                              <FormControlLabel
                                   control={
                                        <Checkbox
                                             onChange={() =>
                                                  handleCheckboxOnChange(
                                                       "sports"
                                                  )
                                             }
                                             color="secondaryShade2"
                                        />
                                   }
                                   label="Sports"
                                   labelPlacement="end"
                              />
                              <FormControlLabel
                                   control={
                                        <Checkbox
                                             onChange={() => {
                                                  handleCheckboxOnChange(
                                                       "food"
                                                  );
                                             }}
                                             color="secondaryShade2"
                                        />
                                   }
                                   label="Food"
                                   labelPlacement="end"
                              />
                              <FormControlLabel
                                   control={
                                        <Checkbox
                                             onChange={() => {
                                                  handleCheckboxOnChange(
                                                       "travel"
                                                  );
                                             }}
                                             color="secondaryShade2"
                                        />
                                   }
                                   label="Travel"
                                   labelPlacement="end"
                              />
                              <FormControlLabel
                                   control={
                                        <Checkbox
                                             onChange={() => {
                                                  handleCheckboxOnChange(
                                                       "movies"
                                                  );
                                             }}
                                             color="secondaryShade2"
                                        />
                                   }
                                   label="Movies"
                                   labelPlacement="end"
                              />
                              <FormControlLabel
                                   control={
                                        <Checkbox
                                             onChange={() =>
                                                  handleCheckboxOnChange(
                                                       "shopping"
                                                  )
                                             }
                                             color="secondaryShade2"
                                        />
                                   }
                                   label="Shopping"
                                   labelPlacement="end"
                              />
                              <FormControlLabel
                                   control={
                                        <Checkbox
                                             onChange={() =>
                                                  handleCheckboxOnChange(
                                                       "games"
                                                  )
                                             }
                                             color="secondaryShade2"
                                        />
                                   }
                                   label="Games"
                                   labelPlacement="end"
                              />
                         </FormGroup>
                         {/* back button is always allowed */}
                         <Button
                              onClick={handleBack}
                              sx={{ color: "secondaryShade3.main" }}
                         >
                              Back
                         </Button>
                    </StepContent>
               </Step>
          </Stepper>
     );
};

export default SignupStepper;
