// components
import Form from "../../components/ui/Form";
import Decal from "../../components/layout/Decal";
import StartingTemplate from "../../components/layout/StartingTemplate";
import PasswordField from "../../components/ui/PasswordField";
import UsernameField from "../../components/ui/UsernameField";

// redux
import { useDispatch, useSelector } from "react-redux";
import { authorizationActions } from "../../store/authorization-slice";
import { loginActions } from "../../store/login-slice";

// react
import { useEffect } from "react";

// hooks
import useHttp from "../../hooks/use-http";

// utils
import { isInputValid } from "../../utils/functions";

const Login = () => {
     // custom hook logic
     const { sendRequest, profileUser } = useHttp();

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

     // handle form submission
     const handleSubmit = (e) => {
          e.preventDefault();
          // first, check immediate validity of both inputs (since reducer sets both to true by default, as to not show errors for empty values)
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
               console.log(Object.entries(profileUser));
               // Object.entries(profileUser).find((user) =>
               //      user === usernameValue
               //           ? console.log("user found")
               //           : console.log("not found")
               // );
          }
          // fixme: if not, <Toast /> user doesn't exist, and try again (reset the state)
          // fixme: if they pass validity, AND the user exists, compare the password and username from firebase
          // fixme: if they pass validity BUT don't match, <Toast /> wrong combo is used and tro try again (rest the state)
          // fixme: only when all are valid can http request be sent to firebase to fill users pictures!
          // fixme: only when successful can redux change Auth state, and thus go to MainContent after
          // dispatch(authorizationActions.login());
     };

     useEffect(() => {
          // reset input fields
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
                         mt: "10em",
                    }}
               >
                    <UsernameField />
                    <PasswordField />
               </Form>
          </StartingTemplate>
     );
};

export default Login;
