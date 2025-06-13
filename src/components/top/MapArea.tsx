import React, {useContext, useEffect, useRef, useState} from 'react';
import SideBar from "./SideBar";
import CustomMap from "./CustomMap";
import {Box, Drawer, Grid2, ThemeProvider} from "@mui/material";
import {Map, Placemark, SearchControl, YMaps} from '@pbe/react-yandex-maps';
import {defaultInitialMapState, emptySearchRequest} from "../../utils/constants";
import SearchBar from "../search/SearchBar";
import {SearchRequest} from "../../utils/types";
import {GRingContext} from "../../utils/context";

const MapArea = () => {
    const {places, setCounter} = useContext(GRingContext)
    const [searchOpen, setSearchOpen] = React.useState(false);
    const [searchRequest, setSearchRequest] = useState<SearchRequest>(emptySearchRequest)
    const [searchResult, setSearchResult] = React.useState<string[]>([])
    const [showSearchResult, setShowSearchResult] = React.useState(false)
    const containerRef = useRef(null);

    useEffect(() => {
        setCounter(showSearchResult ? places.filter(p=>searchResult.includes(p.id)).length : places.length)
    }, [places, searchResult, showSearchResult])

    return (
        <Grid2 container height={'calc(100vh - 64px)'}>
            <Grid2 size={{xs: 12, sm: 3, xl: 2}}>
                <SideBar
                    setSearchRequest={setSearchRequest}
                    showSearchResult={showSearchResult}
                    setShowSearchResult={setShowSearchResult}
                    searchOpen={searchOpen}
                    setSearchOpen={setSearchOpen}
                />
            </Grid2>
            <Grid2 size={{xs: 12, sm: 9, xl: 10}}>
                <Box
                    ref={containerRef}
                    sx={{width: 'auto', height: '100%', position: "relative"}}>

                    <CustomMap
                        searchResult={searchResult}
                        showSearchResult={showSearchResult}
                    />

                    <Drawer
                        open={searchOpen}
                        onClose={() => setSearchOpen(false)}
                        anchor="left"
                        variant="temporary"
                        container={containerRef.current}
                        ModalProps={{
                            container: containerRef.current,
                            disablePortal: true
                        }}
                        sx={{
                            position: 'absolute',
                            '& .MuiPaper-root': {position: 'absolute'}
                        }}
                    >
                        <SearchBar
                            setSearchResult={setSearchResult}
                            setShowSearchResult={setShowSearchResult}
                            searchRequest={searchRequest}
                            setSearchRequest={setSearchRequest}
                            setSearchOpen={setSearchOpen}/>
                    </Drawer>
                </Box>
            </Grid2>
        </Grid2>
    );
};

export default MapArea;