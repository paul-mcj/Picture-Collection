// react router dom
import { Route, Routes, Navigate } from "react-router-dom";

// components
import NotFound from "./NotFound";
import Login from "./Login";
import SignUp from "./SignUp";
import AllPictures from "./AllPictures";
import Favourites from "./Favourites";
import About from "./About";
import MainContent from "./MainContent";

{
     /* fixme: animate routes to use horizontal swipe */
}

// define all route definitions here
const MainAppRoutes = () => {
     return (
          <Routes>
               {/* default page url is: /app-entry/login */}
               <Route path="/" element={<Navigate to="/login" replace />} />
               <Route path="/login" element={<Login />} />
               <Route path="/signup" element={<SignUp />} />
               <Route path="/main-content" element={<MainContent />}>
                    {/* fixme: add logic that if user is not logged in AND/OR authorized, not-found will always be routed to!!! ie. no user can modify the url just to cheat into MainContent*/}
                    {/* fixme: within main content, there should be a dynamic :id based on user from firebase, then EACH has their own sub routes to all-pictures, about, favourites, etc. */}
                    <Route path="all-pictures" element={<AllPictures />} />
                    <Route path="favourites" element={<Favourites />} />
                    <Route path="about" element={<About />} />
                    {/* default sub-route when user is authorized is to <AllPictures />*/}
                    <Route path="*" element={<AllPictures />} />
               </Route>
               <Route path="/not-found" element={<NotFound />} />
               {/* any path that doesn't match any of the above routes goes to the /not-found page */}
               <Route path="/*" element={<NotFound />} />
          </Routes>
     );
};

export default MainAppRoutes;
