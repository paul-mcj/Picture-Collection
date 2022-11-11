// components
import Form from "../../components/ui/Form";
import Decal from "../../components/layout/Decal";
import StartingTemplate from "../../components/layout/StartingTemplate";
import PasswordField from "../../components/ui/PasswordField";
import UsernameField from "../../components/ui/UsernameField";

const Login = () => {
     // handle form submission
     const handleSubmit = () => {
          // fixme: if any field is empty, an error needs to occur before finalizing form submission
          // fixme: reach into each validation state for every input field, and only when all are valid can http request be sent to firebase!
     };

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
