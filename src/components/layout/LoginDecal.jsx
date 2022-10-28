// react and misc
import { Fragment } from "react";

// material ui
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const LoginDecal = () => {
    return (
        <Fragment>
            <AutoAwesomeRoundedIcon
                sx={{
                    color: "#e6a212",
                    fontSize: "600px",
                    transform: "translate(140px, -300px)",
                }}
            />
            <AutoAwesomeRoundedIcon
                color="primary"
                sx={{
                    fontSize: "600px",
                    transform: "translate(155px, -920px)",
                }}
            />
        </Fragment>
    );
};

export default LoginDecal;
