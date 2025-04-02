import React, {useContext, useEffect, useState} from 'react';
import {
    Box,
    Dialog,
    DialogContent,
    IconButton,
    Stack,
} from "@mui/material";
import {GRingContext} from "../../utils/context";
import MapArea from "./MapArea";
import CloseIcon from '@mui/icons-material/Close';
import {base_url, url_getplace} from "../../utils/constants";
import {emptyPlace, FullPlace} from "../../utils/types";
import ImageGallery from "../objectcard/ImageGallery";
import ObjectDataPanel from "../objectcard/ObjectDataPanel";
import {parseAddress} from "../../utils/utils";
import {placesLocal} from "../../utils/data";


const MainArea = () => {
    const {setAppMode, appMode} = useContext(GRingContext)
    const [currentPlace, setCurrentPlace] = useState<FullPlace>(emptyPlace)

    function processPlaceData(data: any) {
        setCurrentPlace({
            latlon: data.latlon,
            name: data.name,
            appeal: data.appeal,
            date: data.date,
            address: parseAddress(data.address),
            dateAdded: data.dateAdded,
            description: data.description,
            genres: [...data.genres],
            types: [...data.types],
            architects: [...data.architects],
            pages: data.pages ? [...data.pages] : [],
            cultureStatus: data.cultureStatus,
            pics: data.pics,
            images: data.images
        })
    }

    useEffect(() => {
        if (appMode !== 'map') {
            fetch(`${base_url}${url_getplace}${appMode}`)
                .then(response => response.json())
                .then(data => {
                    processPlaceData(data)
                })
                .catch(error => {
                    console.log(error)
                    processPlaceData(placesLocal[Math.floor(Math.random() * placesLocal.length)])
                })
        }
    }, [appMode]);

    const handleClose = () => {
        setAppMode('map');
    };
    return (<Box>
        <MapArea/>
        <Dialog
            fullScreen
            onClose={handleClose}
            scroll={"body"}
            // fullWidth={true}
            // maxWidth={'xl'}
            aria-labelledby="customized-dialog-title"
            open={appMode !== 'map'}
        >
            <DialogContent
                sx={{p:0}}
                dividers>
                <Stack>
                    <ImageGallery place={currentPlace}/>
                    <ObjectDataPanel place={currentPlace}/>
                </Stack>
            </DialogContent>
        </Dialog>
    </Box>);
};

export default MainArea;