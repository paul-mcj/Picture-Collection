// material ui
import Fab from "@mui/material/Fab";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

// react & misc
import PropTypes from "prop-types";

const FormButton = ({ submitBtnText, submitBtnStyle, disabled }) => {
     return (
          <Fab
               disabled={disabled ? true : false}
               component="button"
               type="submit"
               variant="extended"
               style={{ alignSelf: "flex-end" }}
               sx={submitBtnStyle}
          >
               {submitBtnText}
               <EastOutlinedIcon sx={{ ml: 2 }} />
          </Fab>
     );
};

FormButton.propTypes = {
     submitBtnText: PropTypes.string,
     submitBtnStyle: PropTypes.object,
     disabled: PropTypes.bool,
};

export default FormButton;
