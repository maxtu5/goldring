import React from 'react';
import {Dialog, DialogTitle, Typography} from "@mui/material";

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

const DisplayObject = (props: SimpleDialogProps) => {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Set backup account</DialogTitle>
            <Typography variant={"h2"}>Ну привет</Typography>
        </Dialog>
    );
};

export default DisplayObject;