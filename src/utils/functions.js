// takes in an unknown amount of arguments and creates three key:value pairs for each argument to set initialized values for reducer logic (consolidates all key:value pairs into one finalized object to be used for initial reduction state).
const populateInit = (field) => {
    let returnedObj = {};

    for (let i = 0; i < field.length; i++) {
        let tempObj = {
            [`${field[i]}Value`]: "",
            [`${field[i]}Blur`]: false,
            [`${field[i]}Helper`]: "",
        };

        Object.assign(returnedObj, tempObj);
        // fixme: does spreading work?
        // returnedObj = {...tempObj};
    }

    return returnedObj;
};

// if a value is found to be empty, a dispatch function is called to show an error (used for multiple validation checks for <InputField /> component reducer logic).
const checkValueField = (value, event, dispatch) => {
    value.trim().length === 0
        ? dispatch({ type: "IS_ERROR", target: `${event.target.id}` })
        : dispatch({ type: "ERROR_RESOLVED", target: `${event.target.id}` });
};

export { populateInit, checkValueField };
