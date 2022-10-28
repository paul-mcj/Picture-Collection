// react and misc
import { useContext } from "react";

// context
import { AuthenticationContext } from "./store/authentication-context";

// components
import MainContent from "./components/layout/MainContent";
import Login from "./pages/login/Login";

const App = () => {
    // context determines if a user is currently signed in or not
    const { isUserLoggedIn } = useContext(AuthenticationContext);

    return (
        <div>
            {!isUserLoggedIn && <Login />}
            {isUserLoggedIn && <MainContent />}
            {/* fixme: toast needs its own context? always in App.jsx*/}
            {/* <Toast /> */}
        </div>
    );
};

export default App;
