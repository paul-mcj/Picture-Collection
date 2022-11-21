// components
import StartingTemplate from "../components/layout/StartingTemplate";
import Form from "../components/ui/Form";
import Decal from "../components/layout/Decal";
import SignupStepper from "../components/ui/SignupStepper";

// react
import { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { authorizationActions } from "../store/authorization-slice";
import { loginActions } from "../store/login-slice";
import { loadingActions } from "../store/loading-slice";

// utils
import { isInputValid } from "../utils/functions";

// hooks
import useHttp from "../hooks/use-http";

const SignUp = () => {
     //redux
     const dispatch = useDispatch();

     // custom hooks
     const { postRequest } = useHttp();

     // login redux values
     const usernameValue = useSelector((state) => state.login.usernameValue);
     const passwordValue = useSelector((state) => state.login.passwordValue);
     const confirmPasswordValue = useSelector(
          (state) => state.login.confirmPasswordValue
     );
     const interests = useSelector((state) => state.login.interests);
     const userProfiles = useSelector((state) => state.login.userProfiles);

     // handle form submission
     const handleSubmit = (e) => {
          e.preventDefault();

          // if any field is empty, blur for the appropriate field needs to occur
          if (
               !isInputValid(usernameValue) ||
               !isInputValid(passwordValue) ||
               !isInputValid(confirmPasswordValue) ||
               interests.length < 1 ||
               interests === null
          ) {
               dispatch(loginActions.checkUsername());
               dispatch(loginActions.checkPassword());
               dispatch(loginActions.checkConfirmPassword());
               dispatch(loginActions.checkInterests());
               return;
          }
          dispatch(loadingActions.toggleIsLoading());
          // create the new user object
          // fixme: this will have to be in another file as a function, where image objects can be constructed from unsplash with provided interests!
          let newUser = {
               user: `${usernameValue}`,
               data: {
                    password: passwordValue,
                    data: [
                         { image1: { image: "imageHere", url: "urlHere" } },
                         {},
                         {},
                    ],
               },
          };
          // send http request to firebase and add new user object
          postRequest(newUser);
          console.log(userProfiles);

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
