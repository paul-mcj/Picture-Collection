// react & misc
import { useState } from "react";

// redux
import { loginActions } from "../store/login-slice";
import { useDispatch } from "react-redux";
import { toastActions } from "../store/toast-slice";

const useHttp = () => {
     // redux
     const dispatch = useDispatch();

     // default GET request with custom hook
     const [method, setMethod] = useState("GET");

     // update method for http request
     const changeMethod = (methodName) => {
          setMethod(() => methodName);
     };

     const sendRequest = async () => {
          try {
               const res = await fetch(
                    "https://react-refresher-a93ac-default-rtdb.firebaseio.com/users.json",
                    {
                         method,
                    }

                    // {
                    //      body: JSON.stringify(),
                    //  headers: {
                    //       "Content-type": "application/json; charset=UTF-8",
                    //  },
                    // }
               );
               const data = await res.json();
               dispatch(loginActions.getUserProfiles(data));
          } catch (err) {
               dispatch(
                    toastActions.changeMessage(`An error has occurred: ${err}`)
               );
               dispatch(toastActions.setColor("error"));
               dispatch(toastActions.toggleIsOpen());
          }
     };

     return { sendRequest, changeMethod };
};

export default useHttp;
