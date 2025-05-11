import React from 'react';
import SideBar from "./SideBar";
import CustomMap from "./CustomMap";
import {Grid2} from "@mui/material";
import {YMaps} from '@pbe/react-yandex-maps';

const MapArea = () => {
    const [searchOpen, setSearchOpen] = React.useState(false);
    return (
        <Grid2 container height={'calc(100vh - 64px)'}>
            <Grid2 size={{xs: 12, sm: 3, xl: 2}}>
                <SideBar searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
            </Grid2>
            <Grid2 size={{xs: 12, sm: 9, xl: 10}}>
                <YMaps query={{apikey: '3954d170-f82d-46dc-b843-bf9cd5117be4'}}>
                    <CustomMap searchOpen={searchOpen} setSearchOpen={setSearchOpen}/>
                </YMaps>
            </Grid2>
        </Grid2>
    );
};

export default MapArea;