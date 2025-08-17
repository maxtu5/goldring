import React, {useContext, useEffect, useState} from 'react';
import {Box, Dialog, DialogContent,} from "@mui/material";
import {GRingContext} from "../../utils/context";
import MapArea from "./MapArea";
import {emptyPlace, FullPlace, PlaceForEdit} from "../../utils/types";
import ImageGallery from "../objectcard/ImageGallery";
import PointData from "../objectcard/PointData";
import EditPlaceForm from "../objectcard/EditPlaceForm";
import {loadPlaceDisplay, loadPlaceEdit} from "../../fetchers/fetchers";
import {CreatePointForm} from "../objectcard/CreatePointForm";
import {ZoomableImage} from "../objectcard/ZoomableImage";
import {UserManagementForm} from "../user/UserManagementForm";
import StatsPanel from "../admin/StatsPanel";

const MainArea = () => {
    const {setAppMode, appMode} = useContext(GRingContext)
    const [currentPlace, setCurrentPlace] = useState<FullPlace>(emptyPlace)
    const [editPlaceData, setEditPlaceData] = useState<PlaceForEdit | null>(null)
    const [editMode, setEditMode] = useState<boolean>(false)
    const [imageView, setImageView] = useState<string>("")

    useEffect(() => {
        if (!appMode) return
        if (['map', 'new', 'user', 'stats'].includes(appMode)) {
            setCurrentPlace(emptyPlace)
        } else {
            loadPlaceDisplay(appMode, setCurrentPlace)
        }
    }, [appMode]);

    const handleClose = () => {
        setAppMode('map');
        setEditPlaceData(null)
        setEditMode(false)
    };

    function setEdtModeAndLoad(id: string) {
        console.log('load edit data')
        // @ts-ignore
        loadPlaceEdit(id).then(p => setEditPlaceData(p))
        setEditMode(true)
    }

    function setViewModeAndUnload() {
        setEditPlaceData(null)
        setEditMode(false)
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
            open={appMode !== 'map'}
        >
            <DialogContent
                sx={{p: 0}}>
                {appMode === 'stats' ? <StatsPanel/> :
                    (appMode === 'user' ? <UserManagementForm/> :
                        (appMode === 'new' ? <CreatePointForm/> :
                            (editMode && editPlaceData !== null ?
                                <EditPlaceForm
                                    place={editPlaceData}
                                    setPlace={setEditPlaceData}
                                    saveAndClose={() => {
                                        setViewModeAndUnload()
                                        loadPlaceDisplay(editPlaceData?.id, setCurrentPlace)
                                    }}
                                /> : (imageView === "" ?
                                    <Box sx={{height: '100%', maxHeight: '100vh'}}>
                                        <ImageGallery place={currentPlace} setImageView={setImageView}/>
                                        <PointData place={currentPlace}
                                                   switchMode={() => setEdtModeAndLoad(currentPlace.id)}/>
                                    </Box> :
                                    <ZoomableImage alt={""} src={imageView} setImageView={setImageView}/>))))
                }
            </DialogContent>
        </Dialog>
    </Box>);
};

export default MainArea;