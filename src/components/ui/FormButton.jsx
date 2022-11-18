// material ui
import Fab from "@mui/material/Fab";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

// react & misc
import PropTypes from "prop-types";

// framer motion
import { motion } from "framer-motion";

// components
import Loading from "../../components/assets/Loading";

// redux
import { useSelector } from "react-redux";

const FormButton = ({ submitBtnText, submitBtnStyle }) => {
     // loading redux state
     const isLoading = useSelector((state) => state.loading.isLoading);

     return (
          <div style={{ display: "inline-block" }}>
               <motion.div whileTap={{ scale: 1.2 }}>
                    <Fab
                         disabled={isLoading}
                         component="button"
                         type="submit"
                         variant="extended"
                         sx={submitBtnStyle}
                    >
                         {submitBtnText}
                         <EastOutlinedIcon sx={{ ml: 2 }} />
                         {isLoading && <Loading />}
                    </Fab>
               </motion.div>
          </div>
     );
};

FormButton.propTypes = {
     submitBtnText: PropTypes.string,
     submitBtnStyle: PropTypes.object,
};

export default FormButton;
