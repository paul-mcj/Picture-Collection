// components
import MainContent from "./components/layout/MainContent";
import AppEntry from "./components/layout/AppEntry";
import Toast from "./components/layout/Toast";

// redux
import { useSelector } from "react-redux";

// react and misc
import { Fragment } from "react";

const App = () => {
     // access redux state for authorization checking
     const isAuthorized = useSelector(
          (state) => state.authorization.isAuthorized
     );

     // access toast redux
     const isOpen = useSelector((state) => state.toast.isOpen);

     return (
          <Fragment>
               {isAuthorized ? <MainContent /> : <AppEntry />}
               {isOpen && <Toast />}
          </Fragment>
     );
};

export default App;
