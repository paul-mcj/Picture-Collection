// material ui
import { Typography } from "@mui/material";

const About = () => {
    return (
        <div>
            <Typography variant="h4">About</Typography>
            <ul>
                detail how the app works:
                <li>
                    STRESS how this is a MOBILE ONLY APP (and not responsive for desktop
                    applications!)
                </li>
                <li>
                    users can sign into a "portal" if they have a correct username/password combo on
                    firebase, otherwise they must sign up
                </li>
                <li>
                    there is a simple Stepper component for new users, that walks through setting up
                    their username (checks if it is taken), sets password, asks for re-enter
                    password, and asks them to select one of a few given categories (ex. sports,
                    food, etc).
                </li>
                <li>
                    for every new user, the allPictures component is filled with 20ish random photos
                    of the selected category. they can then immediately add new photos to that list,
                    and favourite/unfavourite any. all changes are immediately made unique to that
                    user on firebase server
                </li>
                <li>
                    if a user already has an account, then they just log into their last session
                    (and pull all data from firebase, including all added photos they added, and any
                    favourites they selected)
                </li>
                <li>use framer motion for cool shit!</li>
                <li>give credit to unsplash??</li>
                <li>https://www.pinterest.ca/pin/500884789810221499/</li>
            </ul>
        </div>
    );
};

export default About;
