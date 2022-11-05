// components
import StartingTemplate from "../../components/layout/StartingTemplate";
import Form from "../../components/ui/Form";
import Decal from "../../components/layout/Decal";

const SignUp = () => {
    // create an array of desired input fields for this component, and pass as props to <Form /> component
    const inputFields = ["username", "password", "confirm"];

    return (
        <StartingTemplate
            color1="secondary"
            color2="secondaryShade1"
            header="Sign Up"
            ctaText="Already have an account?"
            link="/login"
            linkText=" Sign in"
        >
            <Form
                inputFields={inputFields}
                submitBtnText="Sign Up"
                submitBtnStyle={{
                    background: "linear-gradient(to left,  #1255e6,#145eff)",
                    mt: "10em",
                }}
            />
        </StartingTemplate>
    );
};

export default SignUp;
