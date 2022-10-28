// material ui
import Typography from "@mui/material/Typography";

// components
import InputField from "../../components/ui/InputField";
import LoginDecal from "../../components/layout/LoginDecal";

const Login = () => {
    return (
        <div>
            <Typography
                component="header"
                // sx={{ fontSize: "40px", marginTop: "90px", zIndex: "-200", position: "fixed" }}
            >
                Login
            </Typography>
            <p sx={{ marginTop: "90px", zIndex: "-200", position: "fixed" }}>
                Please sign in to continue
            </p>
            <p>hh</p>
            {/* <LoginDecal /> */}
        </div>
    );
};

export default Login;
