// material ui
import Fab from "@mui/material/Fab";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

// react & misc
import PropTypes from "prop-types";

// components
import Loading from "../../components/assets/Loading";

// redux
import { useSelector } from "react-redux";

const FormButton = ({ submitBtnText, submitBtnStyle }) => {
     // loading redux state
     const isLoading = useSelector((state) => state.loading.isLoading);

     return (
          <Fab
               disabled={isLoading}
               component="button"
               type="submit"
               variant="extended"
               style={{ alignSelf: "flex-end" }}
               sx={submitBtnStyle}
          >
               {submitBtnText}
               <EastOutlinedIcon sx={{ ml: 2 }} />
               {isLoading && <Loading />}
          </Fab>
     );
};

FormButton.propTypes = {
     submitBtnText: PropTypes.string,
     submitBtnStyle: PropTypes.object,
};

export default FormButton;
