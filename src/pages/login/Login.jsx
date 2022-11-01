// material ui
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PasswordIcon from "@mui/icons-material/Password";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

// components
import InputField from "../../components/ui/InputField";
import Decal from "../../components/layout/Decal";
import StartingTemplate from "../../components/layout/StartingTemplate";

// react router dom
import { Link } from "react-router-dom";

// react and misc
import { useState } from "react";
import { motion } from "framer-motion";

const Login = () => {
    // create an array for input fields to be populated
    // const inputFields = ["username", "password"];
    // given the above array, create an init object for the reducer with populated input fields
    // const init = populateInit(inputFields);

    // const [focus, setFocus] = useState(false);

    // const xxx = (e) => {
    //     setFocus(() => !focus);
    // };

    // let poop = "";

    // focus ? (poop = 1.02) : (poop = 1);

    // let elevation = (
    //     <motion.div
    //         initial={{ scale: 1 }}
    //         animate={{ scale: `${poop}` }}
    //         transition={{
    //             duration: 0.5,
    //         }}
    //     >
    //         <InputField id="username" label="Username" onFocus={xxx}>
    //             <PersonIcon />
    //         </InputField>
    //     </motion.div>
    // );

    return (
        <StartingTemplate
            color1="primary"
            color2="primaryShade1"
            header="Login"
            subText="Please login to continue"
            fabText="Login"
            fabSx={{ background: "linear-gradient(to left, #e6a212, #ffb414)" }}
            ctaText="Don't have an account?"
            link="/signup"
            linkText=" Sign up"
        >
            {/* fixme: these two components are placeholders, eventually they will use same custom hook/reducer logic as the form inputs used in <AllPictures /> component! */}
            <InputField id="username" label="Username" color="primary">
                {/* {isEmpty && PersonIconOutline : PersonIconFilled} */}
                <PersonIcon />
            </InputField>
            <InputField id="password" label="Password" color="primary">
                <PasswordIcon />
            </InputField>
        </StartingTemplate>
    );
};

export default Login;
