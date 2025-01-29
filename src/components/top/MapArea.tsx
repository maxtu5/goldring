import React, {useContext, useEffect} from 'react';
import SideBar from "./SideBar";
import CustomMap from "./CustomMap";
import {Box, Stack} from "@mui/material";
import {YMaps} from "@pbe/react-yandex-maps";
import {GRingContext} from "../../utils/context";

interface MapAreaProps {
    visible: boolean
}

const MapArea = ({visible}: MapAreaProps) => {

    return (
        <YMaps>

        <Box display={visible?"block":"none"}>
            <Stack  direction={{xs: "column", sm: "row"}} spacing={0} justifyContent={"space-between"}>
                <SideBar/>
                <CustomMap/>
            </Stack>
        </Box>
        </YMaps>

    );
};

export default MapArea;