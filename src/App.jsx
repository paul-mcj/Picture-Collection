// components
import MainContent from "./pages/MainContent";
import AppEntry from "./pages/AppEntry";
import Toast from "./components/layout/Toast";
import NotFound from "./pages/NotFound";

// redux
import { useSelector } from "react-redux";

// react and misc
import { Fragment } from "react";

// react router dom
import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
     // access redux state for authorization checking
     const isAuthorized = useSelector(
          (state) => state.authorization.isAuthorized
     );

     // access toast redux
     const isOpen = useSelector((state) => state.toast.isOpen);

     return (
          <Fragment>
               <Routes>
                    {/* default page url is: /app-entry/login */}
                    <Route
                         path="/"
                         exact
                         element={<Navigate to="/app-entry/login" replace />}
                    />
                    <Route path="/app-entry" exact element={<AppEntry />} />
                    <Route path="/not-found" exact element={<NotFound />} />
                    {/* any path that doesn't match any of the above routes goes to the /not-found page */}
                    <Route path="*" element={<NotFound />} />
               </Routes>
               {isAuthorized ? <MainContent /> : <AppEntry />}
               {isOpen && <Toast />}
          </Fragment>
     );
};

export default App;
