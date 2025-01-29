import React, {useContext} from 'react';
import {Box, Stack} from "@mui/material";
import SideBar from "./SideBar";
import CustomMap from "./CustomMap";
import ObjectCard from "./ObjectCard";
import {GRingContext} from "../../utils/context";
import MapArea from "./MapArea";

const MainArea = () => {
    const {appMode} = useContext(GRingContext)

    return (<Box>
        <MapArea visible={appMode === 'map' ? true : false}/>
        <ObjectCard visible={appMode === 'card' ? true : false}/>
    </Box>);
};

export default MainArea;