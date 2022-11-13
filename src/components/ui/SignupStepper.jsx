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
import { useState } from "react";

// utils
import { isInputValid } from "../../utils/functions";

// components
import UsernameField from "./UsernameField";
import PasswordField from "./PasswordField";

// redux
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/login-slice";

const SignupStepper = () => {
     // redux
     const dispatch = useDispatch();

     // login redux values
     const usernameValue = useSelector((state) => state.login.usernameValue);
     const passwordValue = useSelector((state) => state.login.passwordValue);
     const confirmPasswordValue = useSelector(
          (state) => state.login.confirmPasswordValue
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

     // active step is 0 by default
     const [activeStep, setActiveStep] = useState(0);
     const [continueBtn, setContinueBtn] = useState(false);

     const showContinueBtn = () => {
          setContinueBtn(() => !continueBtn);
     };

     const handleNext = (identifier) => {
          // if the event identifier is from the <Username /> component, then send http req to check if user exists already
          // fixme: loading icon
          // if user doesn't exist, continue in stepper
          setActiveStep((prev) => prev + 1);
          // if user exists, that means they need to pick a new username, display a toast that a new username is needed
     };

     const handleBack = () => {
          setActiveStep((prev) => prev - 1);
     };

     return (
          <Stepper activeStep={activeStep} orientation="vertical">
               <Step>
                    <StepLabel>Create a username</StepLabel>
                    <StepContent>
                         <UsernameField variant="standard" />
                         {/* continue button only shows up when field is valid (at least one character is there)*/}
                         {isInputValid(usernameValue) && (
                              <Button onClick={() => handleNext("username")}>
                                   Continue
                              </Button>
                         )}
                    </StepContent>
               </Step>

               <Step>
                    <StepLabel>Enter a password</StepLabel>
                    <StepContent>
                         <PasswordField />
                         {/* "continue" button only shows if field is valid (at least 5 chars)*/}
                         <Button onClick={handleNext}>Continue</Button>
                         {/* back button is always shown */}
                         <Button onClick={handleBack}>Back</Button>
                    </StepContent>
               </Step>
               <Step>
                    <StepLabel>Re-enter password</StepLabel>
                    <StepContent>
                         <PasswordField />
                         {/* continue button only allowed if it matched the above password field */}
                         <Button onClick={handleNext}>Continue</Button>
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
                    <StepLabel>What are your interests?</StepLabel>
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
                                             onChange={() => {
                                                  console.log("sports checked");
                                             }}
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
                                                  console.log("food checked");
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
                                                  console.log("travel checked");
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
                                                  console.log("movies checked");
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
                                             onChange={() => {
                                                  console.log(
                                                       "shopping checked"
                                                  );
                                             }}
                                             color="secondaryShade2"
                                        />
                                   }
                                   label="Shopping"
                                   labelPlacement="end"
                              />
                              <FormControlLabel
                                   control={
                                        <Checkbox
                                             onChange={() => {
                                                  console.log("Games checked");
                                             }}
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
