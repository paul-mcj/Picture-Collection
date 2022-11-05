// components
import Login from "../../pages/login/Login";
import SignUp from "../../pages/signup/SignUp";

// react router dom
import { Route, Routes, Navigate } from "react-router-dom";

const AppEntry = () => {
    // fixme: framer motion animation, when flipping between these two pages add a flip along the x-axis or z-axis
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {/* default route */}
            <Route path="*" element={<Navigate to="login" replace />} />
        </Routes>
    );
};

export default AppEntry;
