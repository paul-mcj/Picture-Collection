// material ui
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

// components
import InputField from "../ui/InputField";

// react & misc
import PropTypes from "prop-types";

// hooks
import usePassword from "../../hooks/use-password";

const ConfirmPasswordField = ({ variant }) => {
     const { showPassword, handleShowPassword } = usePassword();

     return (
          <InputField
               id="confirmPassword"
               type={showPassword ? "password" : "text"}
               variant={variant}
          >
               <IconButton onClick={handleShowPassword}>
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
               </IconButton>
          </InputField>
     );
};

ConfirmPasswordField.propType = {
     variant: PropTypes.string,
};

export default ConfirmPasswordField;
