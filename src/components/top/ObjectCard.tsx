import React, {useEffect, useState} from 'react';
import {Box, Button, ImageList, ImageListItem, Stack, Typography} from "@mui/material";
import ImageGallery from "../objectcard/ImageGallery";
import ObjectDataPanel from "../objectcard/ObjectDataPanel";
import ObjectHeader from "../objectcard/ObjectHeader";

interface ObjectCardProps {
    visible: boolean
}

const ObjectCard = ({visible}: ObjectCardProps) => {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[visible])

    return (
        <Box display={visible ? "flex" : "none"}>
            <Stack p={2}>
                <ObjectHeader/>
                <ObjectDataPanel/>
                <ImageGallery/>
            </Stack>
        </Box>
    );
};

export default ObjectCard;