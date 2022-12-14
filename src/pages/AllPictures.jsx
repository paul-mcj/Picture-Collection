// react & misc
import { useState, useEffect } from "react";

// components
import PictureList from "../components/pictures/PictureList";
import FloatingActionButton from "../components/ui/FloatingActionButton";

// material ui
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";

// uuid
import { v4 as uuidv4 } from "uuid";

const AllPictures = () => {
     // state to hold array of data (empty by default)
     const [data, setData] = useState([]);

     // upon component mount, fetch all data on server
     // fixme: only should occur once (persist through react navigation might need redux of context api)
     useEffect(() => {
          // temp placeholder array
          let tempArr = [];

          // fixme: try/catch errors for ALL FETCH REQUESTS (create custom hooks for all fetch requests)!!
          // fetch data on server before loading all pictures
          const fetchData = async () => {
               const response = await fetch(
                    // fixme: create a new firebase that deals with user/password objects BEFORE the pictures array of each user's pictures
                    `https://react-refresher-a93ac-default-rtdb.firebaseio.com/meetups.json`,
                    {
                         method: "GET",
                         headers: { "Content-Type": "application/json" },
                    }
               );
               const jsonData = await response.json();
               const arrOfJsonObjs = Object.entries(jsonData);
               arrOfJsonObjs.forEach((obj) => {
                    // generate a uuid for each object coming from the server
                    let id = uuidv4();
                    obj[1].id = id;
                    // push the object to the placeholder array
                    tempArr.push(obj[1]);
               });
               // set state array of all objects
               setData(() => tempArr);
          };

          // fixme: fetchData function should run only if there is no data (otherwise fetchData would be executed everytime this page component is re-evaluated)
          // if (data.length === 0) {
          fetchData();
          console.log("fetching data");
          // }
     }, []);

     // fixme: DELETE request to server if user wants to delete pictures from array

     return (
          <Card>
               <CardContent>
                    <Typography variant="h4">All Pictures</Typography>
                    {/* fixme: display a usercard where their username is shown, how many pictures they have, how many favourites they have, and the button to logout */}
                    <PictureList data={data} />
                    <FloatingActionButton />
               </CardContent>
          </Card>
     );
};

export default AllPictures;
