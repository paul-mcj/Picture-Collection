// components
import Form from "../components/ui/Form";
import Decal from "../components/layout/Decal";
import StartingTemplate from "../components/layout/StartingTemplate";
import PasswordField from "../components/ui/PasswordField";
import UsernameField from "../components/ui/UsernameField";

// redux
import { useDispatch, useSelector } from "react-redux";
import { authorizationActions } from "../store/authorization-slice";
import { loginActions } from "../store/login-slice";
import { toastActions } from "../store/toast-slice";
import { loadingActions } from "../store/loading-slice";

// react router dom
import { useNavigate } from "react-router-dom";

// react
import { useEffect } from "react";

// hooks
import useHttp from "../hooks/use-http";

// utils
import { isInputValid } from "../utils/functions";

const Login = () => {
     // for redirect purposes
     const navigate = useNavigate();

     // custom hook logic
     const { sendRequest } = useHttp();

     // redux
     const dispatch = useDispatch();

     // login redux values
     const usernameValue = useSelector((state) => state.login.usernameValue);
     const passwordValue = useSelector((state) => state.login.passwordValue);
     const usernameIsValid = useSelector(
          (state) => state.login.usernameIsValid
     );
     const passwordIsValid = useSelector(
          (state) => state.login.passwordIsValid
     );
     const userProfiles = useSelector((state) => state.login.userProfiles);

     // handle form submission
     const handleSubmit = (e) => {
          e.preventDefault();

          // first, check immediate validity of both inputs (since reducer sets both to true by default, as to not show errors for empty values) and update reducer state -- if either is not valid return
          if (!isInputValid(usernameValue) || !isInputValid(passwordValue)) {
               dispatch(loginActions.checkUsername());
               dispatch(loginActions.checkPassword());
               return;
          }

          // if both inputs are valid, send http request to see if user exists on firebase
          if (usernameIsValid && passwordIsValid) {
               dispatch(loginActions.checkUsername());
               dispatch(loginActions.checkPassword());
               sendRequest();

               // loading here
               dispatch(loadingActions.toggleIsLoading());
               let tryUser = Object.hasOwn(userProfiles, usernameValue);

               // artificial wait while loading occurs
               // fixme: suspense?
               setTimeout(() => {
                    // if the user doesn't exist update <Toast /> redux state
                    if (!tryUser) {
                         dispatch(
                              toastActions.changeMessage(
                                   `Error! Account user "${usernameValue}" does not exist. Please try another username.`
                              )
                         );
                         dispatch(toastActions.setColor("error"));
                         dispatch(toastActions.toggleIsOpen());
                         // reset all input fields when closing
                         dispatch(loginActions.resetPasswordValue());
                         dispatch(loginActions.resetUsernameValue());
                    }
               }, 2000);

               // artificial wait while loading occurs
               setTimeout(() => {
                    // if the user exists, compare the password and username from firebase
                    if (tryUser) {
                         let tryPassword = userProfiles[usernameValue].password;

                         // if the password and username don't match, update the <Toast /> component
                         if (passwordValue !== tryPassword) {
                              dispatch(
                                   toastActions.changeMessage(
                                        `Warning! Password is not correct for user ${usernameValue}. Please try again.`
                                   )
                              );
                              dispatch(toastActions.setColor("warning"));
                              dispatch(toastActions.toggleIsOpen());
                         }

                         // fixme: if username and password match send http request to the backend to fill users pictures and change redux Auth state go to <MainContent />
                         // update <Toast /> redux state to welcome user
                         else {
                              navigate("/main-content", { replace: true });
                              dispatch(authorizationActions.login());
                              dispatch(
                                   toastActions.changeMessage(
                                        `Login Success! Welcome, ${usernameValue}!`
                                   )
                              );
                              dispatch(toastActions.setColor("success"));
                              dispatch(toastActions.toggleIsOpen());
                         }
                    }
               }, 2000);
          }
     };

     // due to react state updates being async, reducer state isn't updated after http request to check if user is valid from backend, so if it's an empty string update the state again
     useEffect(() => {
          userProfiles === "" && sendRequest();
     }, [userProfiles, sendRequest]);

     // reset input fields
     useEffect(() => {
          dispatch(loginActions.resetPasswordValue());
          dispatch(loginActions.resetUsernameValue());
     }, [dispatch]);

     return (
          <StartingTemplate
               color1="primary"
               color2="primaryShade1"
               header="Login"
               subText="Please login to continue"
               ctaText="Don't have an account?"
               link="/signup"
               linkText=" Sign up"
               sx={{
                    height: "98vh",
               }}
          >
               <Form
                    handleOnSubmit={handleSubmit}
                    submitBtnText="Login"
                    submitBtnStyle={{
                         background:
                              "linear-gradient(to left, #e6a212, #ffb414)",
                    }}
               >
                    <UsernameField />
                    <PasswordField />
               </Form>
          </StartingTemplate>
     );
};

export default Login;
