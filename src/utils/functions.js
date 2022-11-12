// takes in an array of unknown amount of elements and creates three key:value pairs for each element to set initialized values for reducer logic (consolidates all key:value pairs into one finalized object to be used for initial reduction state).
const populateInit = (field) => {
     let returnedObj = {};

     for (let i = 0; i < field.length; i++) {
          let tempObj = {
               [`${field[i]}Value`]: "",
               [`${field[i]}Blur`]: false,
               [`${field[i]}IsValid`]: true,
          };

          Object.assign(returnedObj, tempObj);
     }

     return returnedObj;
};

// validation function returns true if input isn't empty (or have only whitespace), and false if it has anything else in it
const isInputValid = (inputValue) => {
     return inputValue.trim().length === 0 ? false : true;
};

export { populateInit, isInputValid };
