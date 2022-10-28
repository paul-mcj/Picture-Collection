// components
import StartingTemplate from "../../components/layout/StartingTemplate";
import InputField from "../../components/ui/InputField";

const SignUp = () => {
    return (
        <StartingTemplate
            color1="secondary"
            color2="secondaryShade1"
            header="Sign Up"
            fabText="Sign Up"
            fabSx={{ background: "linear-gradient(to left,  ##1255e6,#145eff)" }}
            ctaText="Already have an account?"
            link="/"
            linkText="Sign in"
        >
            <InputField id="test" label="testing" />
        </StartingTemplate>
    );
};

export default SignUp;
