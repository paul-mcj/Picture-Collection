// material ui
import PersonIcon from "@mui/icons-material/Person";

// react & misc
import PropTypes from "prop-types";

// components
import InputField from "../../components/ui/InputField";

const UsernameField = ({ variant }) => {
     return (
          <InputField id="username" type="text" variant={variant}>
               {/* 8px is to emulate the padding for material ui <IconButton /> components, so that it remains consistent with other icons and forms don't look messy */}
               {!variant && <PersonIcon style={{ padding: "8px" }} />}
          </InputField>
     );
};

UsernameField.propType = {
     variant: PropTypes.string,
};

export default UsernameField;
