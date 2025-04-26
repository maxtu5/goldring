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
import {placesLocal} from "../../utils/data";


const MainArea = () => {
    const {setAppMode, appMode} = useContext(GRingContext)
    const [currentPlace, setCurrentPlace] = useState<FullPlace>(emptyPlace)

    function processPlaceData(data: any) {
        console.log(data)
        setCurrentPlace({
            id: data.id,
            latlon: data.latlon,
            name: data.name,
            appeal: data.appeal,
            date: data.date,
            address: data.address,
            dateAdded: data.dateAdded,
            description: data.description,
            genres: [...data.genres],
            types: [...data.types],
            architects: data.architects,
            pages: data.pages ? [...data.pages] : [],
            cultureStatus: data.cultureStatus,
            pics: data.pics,
            bigLines: [...data.bigLines],
            smallLine: data.smallLine
        })
    }

    useEffect(() => {
        if (appMode !== 'map') {
            console.log(`${base_url}${url_getplace}${appMode}`)
            fetch(`${base_url}${url_getplace}${appMode}`)
                .then(response => response.json())
                .then(data => {
                    processPlaceData(data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [appMode]);

    const handleClose = () => {
        setAppMode('map');
    };
    return (<Box
        sx={{
            height: '100%',
            maxHeight: 'calc(100vh - 64px)',
        }}>
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
                sx={{p:0}}>
                <Stack>
                    <ImageGallery place={currentPlace}/>
                    <ObjectDataPanel place={currentPlace}/>
                </Stack>
            </DialogContent>
        </Dialog>
    </Box>);
};

export default MainArea;