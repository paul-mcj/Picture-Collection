// components
import Form from "../../components/ui/Form";
import Decal from "../../components/layout/Decal";
import StartingTemplate from "../../components/layout/StartingTemplate";

const Login = () => {
    // create an array of desired input fields for this component, and pass as props to <Form /> component
    const inputFields = ["username", "password"];

    return (
        <StartingTemplate
            color1="primary"
            color2="primaryShade1"
            header="Login"
            subText="Please login to continue"
            ctaText="Don't have an account?"
            link="/signup"
            linkText=" Sign up"
        >
            <Form
                inputFields={inputFields}
                submitBtnText="Login"
                submitBtnStyle={{
                    background: "linear-gradient(to left, #e6a212, #ffb414)",
                    mt: "10em",
                }}
            />
        </StartingTemplate>
    );
};

export default Login;
