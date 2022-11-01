// components
import Login from "../../pages/login/Login";
import SignUp from "../../pages/signup/SignUp";

// react router dom
import { Route, Routes } from "react-router-dom";

const AppEntry = () => {
    // fixme: framer motion animation, when flipping between these two pages add a flip along the x-axis or z-axis
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
    );
};

export default AppEntry;
