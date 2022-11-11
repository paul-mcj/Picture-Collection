// react & misc
import PropTypes from "prop-types";

// material ui
import Grid from "@mui/material/Grid";

// components
import FormButton from "./FormButton";

const Form = ({
     handleOnSubmit,
     submitBtnText,
     submitBtnStyle,
     children,
     disabled,
}) => {
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
     // const isError = (value) => {
     //     return value;
     // };

     return (
          <form onSubmit={handleOnSubmit}>
               <Grid container direction="column">
                    {children}
               </Grid>
               <FormButton
                    submitBtnText={submitBtnText}
                    submitBtnStyle={submitBtnStyle}
                    disabled={disabled}
               />
          </form>
     );
};

Form.propTypes = {
     handleOnSubmit: PropTypes.func.isRequired,
     submitBtnText: PropTypes.string,
     submitBtnStyle: PropTypes.object,
     children: PropTypes.node.isRequired,
     disabled: PropTypes.bool,
};

export default Form;
