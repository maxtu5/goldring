import React from 'react';
import SideBar from "./SideBar";
import CustomMap from "./CustomMap";
import {Box, Stack} from "@mui/material";

interface MapAreaProps {
    visible: boolean
}

const MapArea = ({visible}: MapAreaProps) => {
    return (
        <Box display={visible?"block":"none"}>
            <Stack direction={{xs: "column", sm: "row"}} spacing={0} justifyContent={"space-between"}>
                <SideBar/>
                <CustomMap/>
            </Stack>
        </Box>
    );
};

export default MapArea;