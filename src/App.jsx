// components
import Toast from "./components/layout/Toast";
import MainAppRoutes from "./pages/MainAppRoutes";
import MainContent from "./pages/MainContent";

// redux
import { useSelector } from "react-redux";

// react and misc
import { Fragment } from "react";

const App = () => {
     // access authorization redux
     const isAuthorized = useSelector(
          (state) => state.authorization.isAuthorized
     );

     // access toast redux
     const isOpen = useSelector((state) => state.toast.isOpen);

     return (
          <Fragment>
               <MainAppRoutes />
               {isAuthorized && <MainContent />}
               {isOpen && <Toast />}
          </Fragment>
     );
};

export default App;
