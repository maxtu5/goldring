import React from 'react';
import SideBar from "./SideBar";
import CustomMap from "./CustomMap";
import {Box, Grid2, Stack} from "@mui/material";

interface MapAreaProps {
    visible: boolean
}

const MapArea = () => {
    const [searchOpen, setSearchOpen] = React.useState(false);
    return (
        <Grid2 container
               height={'calc(100vh - 64px)'}
        >
            <Grid2 size={{xs: 12, sm: 3, xl: 2}}>
                <SideBar searchOpen={searchOpen} setSearchOpen={setSearchOpen}/>
            </Grid2>
            <Grid2 size={{xs: 12, sm: 9, xl: 10}}>
                <CustomMap searchOpen={searchOpen} setSearchOpen={setSearchOpen}/>
            </Grid2>
        </Grid2>
    );
};

export default MapArea;