import React, {useContext, useEffect, useState} from 'react';
import {
    Box,
    Dialog,
    DialogContent,
    Stack,
} from "@mui/material";
import {GRingContext} from "../../utils/context";
import MapArea from "./MapArea";
import {emptyPlace, FullPlace, PlaceForEdit} from "../../utils/types";
import ImageGallery from "../objectcard/ImageGallery";
import ObjectDataPanel from "../objectcard/ObjectDataPanel";
import EditPlaceForm from "../objectcard/EditPlaceForm";
import {loadPlaceDisplay, loadPlaceEdit} from "../../fetchers/fetchers";

const MainArea = () => {
    const {setAppMode, appMode} = useContext(GRingContext)
    const [currentPlace, setCurrentPlace] = useState<FullPlace>(emptyPlace)
    const [editPlaceData, setEditPlaceData] = useState<PlaceForEdit | null>(null)
    const [editMode, setEditMode] = useState<boolean>(false)

    useEffect(() => {
        console.log('load hook', appMode)
        if (appMode && appMode !== 'map') {
            loadPlaceDisplay(appMode, setCurrentPlace)
        }
    }, [appMode]);

    const handleClose = () => {
        setAppMode('map');
    };

    function setEdtModeAndLoad(id: string) {
        console.log('load edit data')
        // @ts-ignore
        loadPlaceEdit(id).then(p => setEditPlaceData(p))
        setEditMode(true)
    }

    function setEditModeAndUnload() {
        setEditPlaceData(null)
        setEditMode(false)
        setAppMode(appMode)
    }

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
                sx={{p: 0}}>
                {editMode && editPlaceData !== null ? <EditPlaceForm
                        place={editPlaceData}
                        setPlace={setEditPlaceData}
                        switchMode={() => setEditModeAndUnload()}
                        refreshPlace={()=>loadPlaceDisplay(editPlaceData?.id, setCurrentPlace)}/> :
                    <Stack>
                        <ImageGallery place={currentPlace}/>
                        <ObjectDataPanel place={currentPlace} switchMode={() => setEdtModeAndLoad(currentPlace.id)}/>
                    </Stack>
                }
            </DialogContent>
        </Dialog>
    </Box>);
};

export default MainArea;