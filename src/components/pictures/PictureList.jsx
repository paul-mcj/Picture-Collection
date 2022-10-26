// react & misc
import PropTypes from "prop-types";
import { Fragment } from "react";

// components
import PictureItem from "./PictureItem";

const PictureList = ({ data }) => {
    return (
        <Fragment>
            {data.map((picture) => (
                <PictureItem picture={picture} key={picture.id} />
            ))}
        </Fragment>
    );
};

PictureList.propTypes = {
    data: PropTypes.array.isRequired,
};

export default PictureList;
