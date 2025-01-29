import React, {useContext} from 'react';
import {Box} from "@mui/material";

import ObjectCard from "./ObjectCard";
import {GRingContext} from "../../utils/context";
import MapArea from "./MapArea";

const MainArea = () => {
    const {appMode} = useContext(GRingContext)

    return (
        <Box>
            <MapArea visible={appMode === 'map'}/>
            <ObjectCard visible={appMode === 'card'}/>
        </Box>);
};

export default MainArea;