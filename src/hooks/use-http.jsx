// react & misc
import { useState } from "react";

// redux
import { loginActions } from "../store/login-slice";
import { useDispatch } from "react-redux";
import { toastActions } from "../store/toast-slice";

const useHttp = () => {
     // redux
     const dispatch = useDispatch();

     const getRequest = async () => {
          try {
               const res = await fetch(
                    "https://react-refresher-a93ac-default-rtdb.firebaseio.com/users.json"
               );
               const data = await res.json();
               dispatch(loginActions.getUserProfiles(data));
               console.log(data);
          } catch (err) {
               dispatch(
                    toastActions.changeMessage(`An error has occurred: ${err}`)
               );
               dispatch(toastActions.setColor("error"));
               dispatch(toastActions.toggleIsOpen());
          }
     };

     const postRequest = async (newUserData) => {
          try {
               await fetch(
                    "https://react-refresher-a93ac-default-rtdb.firebaseio.com/users.json",
                    {
                         method: "POST",
                    },

                    {
                         body: JSON.stringify(newUserData),
                         headers: {
                              "Content-type": "application/json; charset=UTF-8",
                         },
                    }
               );
               // add new user to login redux
               dispatch(loginActions.addNewUser(newUserData));
          } catch (err) {
               dispatch(
                    toastActions.changeMessage(`An error has occurred: ${err}`)
               );
               dispatch(toastActions.setColor("error"));
               dispatch(toastActions.toggleIsOpen());
          }
     };

     return { getRequest, postRequest };
};

export default useHttp;
