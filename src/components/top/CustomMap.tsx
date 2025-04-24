import React, {useCallback, useContext, useRef, useState} from 'react';
import {Box, Drawer} from "@mui/material";
import {GRingContext} from "../../utils/context";
import {
    LngLat,
    MapEventUpdateHandler,
    SearchResponse,
    YMap as YMapType} from "@yandex/ymaps3-types";
import {
    YMap,
    YMapControls, YMapDefaultFeaturesLayer,
    YMapDefaultSchemeLayer,
    YMapListener,
    YMapMarker,
    YMapSearchControl} from "../../utils/ymaps";
import '@yandex/ymaps3-default-ui-theme/dist/esm/index.css';
import {CustomSuggest, SuggestCallback} from "@yandex/ymaps3-default-ui-theme";

import SearchBar from "./SearchBar";
import {defaultInitialMapState} from "../../utils/constants";

interface CustomMapProps {
    searchOpen: boolean,
    setSearchOpen: (searchOpen: boolean) => void
}

const CustomMap = ({searchOpen, setSearchOpen}: CustomMapProps) => {
    const containerRef = useRef(null);
    const {setAppMode, places} = useContext(GRingContext)
    const [map, setMap] = useState<YMapType | null>(null);

    function loadInitialMapState() {
        const mapStateFromCache = localStorage.getItem("initialMapState")
        return mapStateFromCache ? JSON.parse(mapStateFromCache) : defaultInitialMapState
    }

    const initialMapState = loadInitialMapState();

    const [location, setLocation] = useState(initialMapState);

    function saveMapState(center: number[], zoom: number) {
        if (center[0]===0) return
        localStorage.setItem("initialMapState", JSON.stringify({center: center, zoom: zoom}))
    }

    // ============= SEARCH CONTROL ==================

    const searchResultHandler = useCallback((searchResult: SearchResponse) => {
        updateMapLocation(searchResult);
    }, []);

    function isSingle(subtitle: string | undefined) {
        return subtitle === undefined || !(subtitle.split(' ').length === 2 && ['организаций', 'organizations'].includes(subtitle.split(' ')[1]));
    }

    const refineSuggest: SuggestCallback = useCallback(async (toSearch: CustomSuggest) => {
        const result = await ymaps3.suggest({text: toSearch.text})
        return result.filter(r => isSingle(r.subtitle?.text))
    }, []);

    const updateMapLocation = useCallback((searchResult: SearchResponse) => {
        const newCoords: LngLat = [searchResult[0].geometry?.coordinates[0] ? searchResult[0].geometry?.coordinates[0] : location.center[0],
            searchResult[0].geometry?.coordinates[1] ? searchResult[0].geometry?.coordinates[1] : location.center[1]]
        setLocation({center: [newCoords[0], newCoords[1]], zoom: map?.zoom ? map.zoom : location.zoom});
    }, []);

    // ============= ON DRAG / ZOOM ==================

    const stateChanged: MapEventUpdateHandler = useCallback((update) => {
        if (update.location.center[0]===0) return
        saveMapState([update.location.center[0], update.location.center[1]], update.location.zoom);
    }, [])

    return (
        <Box
            ref={containerRef}
            sx={{width: 'auto', height: 'calc(100vh - 64px)', position: "relative"}}>
            <YMap
                location={location}
                ref={x => setMap(x)}
            >
                <YMapDefaultSchemeLayer/>
                <YMapControls position="top left">
                    <YMapSearchControl suggest={refineSuggest} searchResult={searchResultHandler}/>
                </YMapControls>
                <YMapListener onUpdate={stateChanged}/>
                <YMapDefaultFeaturesLayer/>

                {places.map(place =>
                    <YMapMarker
                        key={place.id}
                        coordinates={[parseFloat(place.latlon.split(',')[1]), parseFloat(place.latlon.split(',')[0])]}
                        onClick={() => setAppMode(place.id)}
                    >
                        <svg width="30" height="30">
                            <circle cx="15" cy="15" r="10" stroke="green" stroke-width="1" fill="yellow"/>

                            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="12"
                                  fill="black">{place.rating}</text>
                        </svg>
                    </YMapMarker>
                )}
            </YMap>
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
                <SearchBar setSearchOpen={setSearchOpen}/>
            </Drawer>
        </Box>
    );
};

export default CustomMap;