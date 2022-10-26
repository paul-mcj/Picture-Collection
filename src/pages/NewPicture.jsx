// react & misc
import { Fragment } from "react";

// react router dom
// import { useNavigate } from "react-router-dom";

// components
import NewPictureForm from "../components/pictures/NewPictureForm";

// material ui
import { Typography } from "@mui/material";

const NewPicture = () => {
    // for page navigation
    // const navigate = useNavigate();

    // gather picture data from <NewPictureForm /> component to send to server
    const onAddPicture = (pictureData) => {
        fetch(`https://react-refresher-a93ac-default-rtdb.firebaseio.com/meetups.json`, {
            method: "POST",
            body: JSON.stringify(pictureData),
            headers: { "Content-Type": "application/json" },
        });
    };

    // fixme: add alert for success and have button option to go to <AllPictures /> page:
    // navigate("/")

    return (
        <Fragment>
            <Typography variant="h4">Add New Picture to Collection</Typography>
            <NewPictureForm onAddPicture={onAddPicture} />
        </Fragment>
    );
};

export default NewPicture;
