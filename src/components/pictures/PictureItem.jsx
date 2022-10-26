// react & misc
import PropTypes from "prop-types";
import { useState } from "react";

// material UI
import { ImageList, ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

// framer motion
import { motion } from "framer-motion";
// import { motion } from "framer-motion/dist/framer-motion";

const PictureItem = ({ picture }) => {
    // state of current item if favourite button is clicked or not (false by default)
    const [clicked, setClicked] = useState(false);

    // current color of favourite icon (empty string by default)
    let color = "";

    // depending on state, color changes value
    clicked ? (color = "error") : (color = "");

    // variable for JSX slimming
    let showIcon = (
        <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
            }}
        >
            <FavoriteIcon color={color} />
        </motion.div>
    );

    // when button is clicked change boolean state to opposite of current state
    // fixme: a small toast reads item is added to favourites page, and item is added to <Favourites /> component page
    const onClick = (e) => {
        setClicked(() => !clicked);
    };

    return (
        // <ImageList variant="masonry" cols={3} gap={8} >
        <ImageList cols={1}>
            <ImageListItem key={picture.id}>
                <img src={`${picture.image}`} alt={`${picture.title}`} />
                <ImageListItemBar
                    title={picture.address}
                    subtitle={picture.description}
                    actionPosition="left"
                    actionIcon={<IconButton onClick={onClick}>{showIcon}</IconButton>}
                />
            </ImageListItem>
        </ImageList>
    );
};

PictureItem.propTypes = {
    picture: PropTypes.object.isRequired,
};

export default PictureItem;
