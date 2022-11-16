// material ui
import { Typography } from "@mui/material";

const About = () => {
     return (
          <div>
               <Typography variant="h4">About</Typography>
               <ul>
                    detail how the app works:
                    <li>
                         STRESS how this is a MOBILE ONLY APP (and not
                         responsive for desktop applications!)
                    </li>
                    <li>
                         users can sign in if they have a correct
                         username/password combo on firebase, otherwise they
                         must sign up
                    </li>
                    <li>
                         for every new user, the allPictures component is filled
                         with 20ish random photos of the selected categories.
                         they can then immediately add new photos to that list,
                         and favourite/unfavourite any. all changes are
                         immediately made unique to that user on firebase server
                    </li>
                    <li>
                         if a user already has an account, then they just log
                         into their last session (and pull all data from
                         firebase, including all added photos they added, and
                         any favourites they selected)
                    </li>
                    <li>
                         transitions everywhere (material ui and framer motion
                         for more cool shit!)
                    </li>
                    <a
                         href="https://mui.com/material-ui/transitions/"
                         target="_blank"
                    >
                         mui transitions
                    </a>
                    <li>
                         all uses of color should point to index.js custom names
                         ex. "sx=secondaryShade1.main". See below for help:
                    </li>
                    <a
                         href="https://stackoverflow.com/questions/40326565/how-do-you-change-the-stepper-color-on-react-material-ui"
                         target="_blank"
                    >
                         palette color usage
                    </a>
                    <li>give credit to unsplash??</li>
                    <a
                         href="https://unsplash.com/documentation#get-a-random-photo"
                         target="_blank"
                    >
                         unsplash
                    </a>
               </ul>
          </div>
     );
};

export default About;
