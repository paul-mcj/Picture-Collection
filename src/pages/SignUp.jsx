// components
import StartingTemplate from "../components/layout/StartingTemplate";
import Form from "../components/ui/Form";
import Decal from "../components/layout/Decal";
import SignupStepper from "../components/ui/SignupStepper";

// react
import { useState, useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { authorizationActions } from "../store/authorization-slice";
import { loginActions } from "../store/login-slice";
import { loadingActions } from "../store/loading-slice";

// utils
import { isInputValid } from "../utils/functions";

const SignUp = () => {
     //redux
     const dispatch = useDispatch();

     // login redux values
     const usernameValue = useSelector((state) => state.login.usernameValue);
     const passwordValue = useSelector((state) => state.login.passwordValue);
     const confirmPasswordValue = useSelector(
          (state) => state.login.confirmPasswordValue
     );
     const interestsIsValid = useSelector(
          (state) => state.login.interestsIsValid
     );

     // state depends on if theres at least one interest checked off for sign up stepper (true by default)
     const [isDisabled, setIsDisabled] = useState(true);

     // handle form submission
     const handleSubmit = (e) => {
          e.preventDefault();

          // if any field is empty, blur for the appropriate field needs to occur
          if (
               !isInputValid(usernameValue) ||
               !isInputValid(passwordValue) ||
               !isInputValid(confirmPasswordValue) ||
               interestsIsValid
          ) {
               dispatch(loginActions.checkUsername());
               dispatch(loginActions.checkPassword());
               dispatch(loginActions.checkConfirmPassword());
               dispatch(loginActions.checkInterests());
               return;
          }

          // fixme: then, send http request be sent to firebase!
          // fixme: show a progress meter/modal when creating a new profile! automatically redirect to login page
          // fixme: dispatch toast saying account was successfully created, try logging in now!
     };

     // reset input fields
     useEffect(() => {
          dispatch(loginActions.resetPasswordValue());
          dispatch(loginActions.resetUsernameValue());
     }, [dispatch]);

     return (
          <StartingTemplate
               color1="secondary"
               color2="secondaryShade1"
               header="Sign Up"
               subText="Create an Account"
               ctaText="Already have an account?"
               link="/login"
               linkText=" Sign in"
          >
               <Form
                    disabled={isDisabled}
                    handleOnSubmit={handleSubmit}
                    submitBtnText="Sign Up"
                    submitBtnStyle={{
                         background:
                              "linear-gradient(to left,  #1255e6,#145eff)",
                         mt: "10em",
                    }}
               >
                    <SignupStepper />
               </Form>
          </StartingTemplate>
     );
};

export default SignUp;
