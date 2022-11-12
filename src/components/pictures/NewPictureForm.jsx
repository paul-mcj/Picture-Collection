// react & misc
import { useReducer } from "react";
import PropTypes from "prop-types";

// material ui
import { Card, CardContent, Button, Grid } from "@mui/material";

// components
import InputField from "../ui/InputField";

// utils
import { populateInit, checkValueField } from "../../utils/functions";

// fixme: reducer may need to be in its own folder...
// reducer
const reducer = (state, action) => {
     switch (action.type) {
          case "VALUE_CHANGE":
               return {
                    ...state,
                    [`${action.target}Value`]: action.payload,
               };
          case "IS_ERROR":
               let url;
               action.target === "image" ? (url = "url") : (url = "");
               return {
                    ...state,
                    [`${action.target}Blur`]: true,
                    [`${action.target}Helper`]: `Please enter a valid ${action.target} ${url}`,
               };
          case "ERROR_RESOLVED":
               return {
                    ...state,
                    [`${action.target}Blur`]: false,
                    [`${action.target}Helper`]: "",
               };
          default:
               return state;
     }
};

const NewPictureForm = ({ onAddPicture }) => {
     // fixme: use effect to populate init object for reducer?
     const inputFields = ["title", "image", "address", "description"];

     // given the above array, create an init object for the reducer with populated input fields
     const init = populateInit(inputFields);

     // reducer uses initialized object
     const [state, dispatch] = useReducer(reducer, init);

     // anytime an <InputField /> value changes it updates the corresponding object value in the reducer object via dispatch
     const onChange = (e) => {
          dispatch({
               type: "VALUE_CHANGE",
               target: `${e.target.id}`,
               payload: e.target.value,
          });

          // immediately check if the new value is valid, if not show error
          // checkValueField(e.target.value, e, dispatch);
     };

     // if any <InputField /> value is empty an error is dispatched
     const onBlur = (e) => {
          // checkValueField(state[`${e.target.id}Value`], e, dispatch);
     };

     // call function when a new picture is added (requires total validation of all fields before submission)
     const handleOnSubmit = (e) => {
          e.preventDefault();

          // if any field is empty, an error needs to occur before finalizing form submission
          inputFields.forEach((value) => {
               if (state[`${value}Value`].trim().length === 0) {
                    dispatch({ type: "IS_ERROR", target: value });
               }
          });

          // fixme: if all fields are not empty, then form submission is successful. this logic needs to be less strict to account for any fields given in the inputFields Array. additionally, the imageValue needs to be url compatible or it will be an error.
          // fixme: eventually add ability to drag and drop a jpeg?
          // fixme: create your own method called "isValid" that checks if the type is correct and trim()length !== 0 as well. compare for all fields, and then continue...
          if (
               state.titleValue.trim().length !== 0 &&
               state.imageValue.trim().length !== 0 &&
               state.addressValue.trim().length !== 0 &&
               state.descriptionValue.trim().length !== 0
          ) {
               // fixme: clear reducer state, and the new picture object should be added to new pictures page
               let jsonData = {
                    address: state.addressValue,
                    image: state.imageValue,
                    title: state.titleValue,
                    description: state.descriptionValue,
               };
               console.log(jsonData);
               onAddPicture(jsonData);
          }
     };

     // variable for JSX slimming -- create a new <InputField /> component with appropriate reducer logic for each field specified in the inputFields array (this makes returned JSX dynamic, as any number of fields can be easily manipulated and each is easily maintainable right here).
     // fixme: need a prop fav={false} by default?
     const newInputField = inputFields.map((field) => (
          <InputField
               key={field}
               id={field}
               label={field[0].toUpperCase() + field.substring(1).toLowerCase()}
               onChange={onChange}
               onBlur={onBlur}
               error={state[`${field}Blur`]}
               helperText={state[`${field}Helper`]}
          />
     ));

     return (
          <Card>
               <CardContent>
                    <form onSubmit={handleOnSubmit}>
                         <Grid container direction="column">
                              {newInputField}
                         </Grid>
                         <Button type="submit">Add Picture</Button>
                    </form>
               </CardContent>
          </Card>
     );
};

NewPictureForm.propTypes = {
     onAddPicture: PropTypes.func,
};

export default NewPictureForm;
