// material ui
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";

// react and misc
import { useState } from "react";

// component
import NewPicture from "../../pages/NewPicture";

const FloatingActionButton = () => {
    // state determines if <Dialog /> is open or not for <NewPictureForm/> (false by default)
    const [modal, setModal] = useState(false);

    // change <Dialog /> state
    const changeModalState = (e) => {
        setModal(() => !modal);
    };

    return (
        <Fab color="secondary" sx={{ position: "fixed", bottom: 70, right: 10 }}>
            <AddIcon onClick={changeModalState} />
            {modal && (
                <Dialog onClose={changeModalState} open={modal}>
                    <NewPicture />
                </Dialog>
            )}
        </Fab>
    );
};

export default FloatingActionButton;
