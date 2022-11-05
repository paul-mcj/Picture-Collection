// components
import MainContent from "./components/layout/MainContent";
import AppEntry from "./components/layout/AppEntry";

// redux
import { useSelector } from "react-redux";

const App = () => {
    // access redux state for authorization checking
    const isAuthorized = useSelector((state) => state.authorization.isAuthorized);

    return (
        <div>
            {isAuthorized ? <MainContent /> : <AppEntry />}
            {/* fixme: toast needs to be part of redux? always in App.jsx*/}
            {/* <Toast /> */}
        </div>
    );
};

export default App;
