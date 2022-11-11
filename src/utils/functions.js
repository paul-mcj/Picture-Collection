// takes in an unknown amount of arguments and creates three key:value pairs for each argument to set initialized values for reducer logic (consolidates all key:value pairs into one finalized object to be used for initial reduction state).
const populateInit = (field) => {
    let returnedObj = {};

    for (let i = 0; i < field.length; i++) {
        let tempObj = {
            [`${field[i]}InputValue`]: "",
            [`${field[i]}IsValid`]: false,
            [`${field[i]}HelperText`]: "",
        };

        // fixme: does spreading work?
        Object.assign(returnedObj, tempObj);
    }

    return returnedObj;
};
// const populateInit = (inputField) => {
//     const obj = {
//         [`${inputField}InputValue`]: "",
//         [`${inputField}IsValid`]: false,
//         [`${inputField}HelperText`]: "",
//     };
//     return obj;
// };

// validation function returns true if input isn't empty or whitespace
const isInputValid = (inputValue) => {
    if (inputValue.trim().length === 0) return false;
    else return true;
};

// if a value is found to be empty, a dispatch function is called to show an error (used for multiple validation checks for <InputField /> component reducer logic).
const checkValueField = (value, id, dispatch) => {
    let type = "";
    value.trim().length === 0 ? (type = "IS_ERROR") : (type = "ERROR_RESOLVED");
    dispatch({ type, target: id });
};

export { populateInit, checkValueField, isInputValid };
