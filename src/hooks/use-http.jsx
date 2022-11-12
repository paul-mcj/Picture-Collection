// react & misc
import { useEffect, useState } from "react";

const useHttp = () => {
     // default GET request with custom hook
     const [method, setMethod] = useState("GET");

     const [profileUser, setProfileUser] = useState(null);

     const changeMethod = (methodName) => {
          setMethod(() => methodName);
     };

     let userData;

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
               console.log(data);
               userData = data;
          } catch (err) {
               console.log(err);
               // fixme: <Toast /> error!
          }
          setProfileUser(() => userData);
     };

     return { sendRequest, changeMethod, profileUser };
};

export default useHttp;
