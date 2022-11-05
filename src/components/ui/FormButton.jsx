// material ui
import Fab from "@mui/material/Fab";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const FormButton = ({ submitBtnText, submitBtnStyle }) => {
    return (
        <Fab
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

export default FormButton;
