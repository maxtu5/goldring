import React from 'react';
import SideBar from "./SideBar";
import CustomMap from "./CustomMap";
import {Box, Grid2, Stack} from "@mui/material";
import {YMaps} from '@pbe/react-yandex-maps';

interface MapAreaProps {
    visible: boolean
}

const MapArea = () => {
    return (
        <Grid2 container
               height={'calc(100vh - 64px)'}
        >
            <Grid2 size={{xs: 12, sm: 3, xl: 2}}>
                <SideBar/>
            </Grid2>
            <Grid2 size={{xs: 12, sm: 9, xl: 10}}>
                <YMaps query={{apikey: '3954d170-f82d-46dc-b843-bf9cd5117be4'}}>
                    <CustomMap/>
                </YMaps>
            </Grid2>
        </Grid2>
    );
};

export default MapArea;