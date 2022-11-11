// components
import StartingTemplate from "../../components/layout/StartingTemplate";
import Form from "../../components/ui/Form";
import Decal from "../../components/layout/Decal";
import SignupStepper from "../../components/ui/SignupStepper";

// react
import { useState } from "react";

const SignUp = () => {
     // state depends on if theres at least one interest checked off for sign up stepper (true by default)
     const [isDisabled, setIsDisabled] = useState(true);

     // handle form submission
     const handleSubmit = () => {
          // fixme: if any field is empty, an error needs to occur before finalizing form submission
          // fixme: reach into each validation state for every input field, and only when all are valid can http request be sent to firebase!
     };

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
