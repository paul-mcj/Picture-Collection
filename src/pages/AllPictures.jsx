// react & misc
import { Fragment, useState, useEffect } from "react";

// components
import PictureList from "../components/pictures/PictureList";

// material ui
import { Typography } from "@mui/material";

// uuid
import { v4 as uuidv4 } from "uuid";

const AllPictures = () => {
    // state to hold array of data (empty by default)
    const [data, setData] = useState([]);

    // upon component mount, fetch all data on server
    // fixme: only should occur once (persist through react navigation)
    useEffect(() => {
        // temp placeholder array
        let tempArr = [];

        // fetch data on server before loading all pictures
        const fetchData = async () => {
            const response = await fetch(
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
        if (data.length === 0) {
            fetchData();
            console.log("fetching data");
        }
    }, [data]);

    return (
        <Fragment>
            <Typography variant="h4">All Pictures</Typography>
            <PictureList data={data} />
        </Fragment>
    );
};

export default AllPictures;
