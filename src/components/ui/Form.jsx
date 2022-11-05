// react & misc
import { useState } from "react";
import PropTypes from "prop-types";

// material ui
import { Button, Grid } from "@mui/material";
import Fab from "@mui/material/Fab";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

// components
import InputField from "./InputField";
import FormButton from "./FormButton";

// utils
import { populateInit, checkValueField } from "../../utils/functions";

const Form = ({ inputFields, submitBtnText, submitBtnStyle }) => {
    // each unique <Form /> component is comprised of a different number of <InputField /> components for reusability, hence each inputField prop passed in needs to be validated before submission

    const handleOnSubmit = (e) => {
        e.preventDefault();

        console.log(populateInit(inputFields));
    };

    //     // if any field is empty, an error needs to occur before finalizing form submission
    //     inputFields.forEach((value) => {
    //         if (state[`${value}InputValue`].trim().length === 0) {
    //             dispatch({ type: "IS_ERROR", target: value });
    //         }
    //     });

    //     // fixme: if all fields are not empty, then form submission is successful. this logic needs to be less strict to account for any fields given in the inputFields Array. additionally, the imageValue needs to be url compatible or it will be an error.
    //     // fixme: eventually add ability to drag and drop a jpeg?
    //     // fixme: create your own method called "isValid" that checks if the type is correct and trim()length !== 0 as well. compare for all fields, and then continue...
    //     if (
    //         state.titleValue.trim().length !== 0 &&
    //         state.imageValue.trim().length !== 0 &&
    //         state.addressValue.trim().length !== 0 &&
    //         state.descriptionValue.trim().length !== 0
    //     ) {
    //         // fixme: clear reducer state, and the new picture object should be added to new pictures page
    //         let jsonData = {
    //             address: state.addressValue,
    //             image: state.imageValue,
    //             title: state.titleValue,
    //             description: state.descriptionValue,
    //         };
    //         console.log(jsonData);
    //         onAddPicture(jsonData);
    //     }
    // };

    // variable for JSX slimming -- create a new <InputField /> component with appropriate reducer logic for each field specified in the inputFields array (this makes returned JSX dynamic, as any number of fields can be easily manipulated and each is easily maintainable right here).
    const newInputField = inputFields.map((field) => (
        <InputField
            key={field}
            id={field}
            label={field[0].toUpperCase() + field.substring(1).toLowerCase()}
            error={null}
            helperText={null}
        />
    ));

    return (
        <form onSubmit={handleOnSubmit}>
            <Grid container direction="column">
                {newInputField}
            </Grid>
            <FormButton submitBtnText={submitBtnText} submitBtnStyle={submitBtnStyle} />
        </form>
    );
};

Form.propTypes = {
    inputFields: PropTypes.array.isRequired,
    submitBtnText: PropTypes.string,
    submitBtnStyle: PropTypes.object,
};

export default Form;
