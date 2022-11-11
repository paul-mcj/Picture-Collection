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

//
let initialRender = true;

const Login = () => {
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
          if (initialRender) {
               initialRender = false;
               dispatch(loginActions.checkUsername());
               dispatch(loginActions.checkPassword());
               return;
          } else {
               // fixme: first, check if both inputs are valid
               dispatch(loginActions.checkUsername());
               dispatch(loginActions.checkPassword());
               // fixme: if not, each should have helper text explaining why
               // fixme: if they pass validity, get the usernameValue, send http request to see if user exists on firebase.
               if (usernameIsValid && passwordIsValid) {
                    console.log("both inputs are valid!");
                    // send http with usernameisvalid
               }
               // fixme: if not, <Toast /> user doesn't exist, and try again (reset the state)
               // fixme: if they pass validity, AND the user exists, compare the password and username from firebase
               // fixme: if they pass validity BUT don't match, <Toast /> wrong combo is used and tro try again (rest the state)
               // fixme: only when all are valid can http request be sent to firebase to fill users pictures!
               // fixme: only when successful can redux change Auth state, and thus go to MainContent after
               // dispatch(authorizationActions.login());
          }
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
