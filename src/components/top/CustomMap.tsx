import React, {useContext, useRef} from 'react';
import {Box, Drawer} from "@mui/material";
import {Map, Placemark, SearchControl} from "@pbe/react-yandex-maps";
import {GRingContext} from "../../utils/context";
import {defaultInitialMapState} from "../../utils/constants";
import SearchBar from "../search/SearchBar";

interface CustomMapProps {
    searchOpen: boolean,
    setSearchOpen: (searchOpen: boolean) => void
}

const CustomMap = ({searchOpen, setSearchOpen}: CustomMapProps) => {
    const {mapState, setAppMode, places, renewMapState} = useContext(GRingContext)
    const containerRef = useRef(null);
    const ymaps = useRef();
    const mapRef = useRef();

    return (
        <Box
            ref={containerRef}
            sx={{width: 'auto', height: '100%', position: "relative"}}>
            <Map
                instanceRef={mapRef}
                width='auto'
                height="100%"
                state={mapState ? mapState : defaultInitialMapState}
                onLoad={(ymapsInstance) => {
                    console.log('load map');
                    // @ts-ignore
                    ymaps.current = ymapsInstance;
                    // @ts-ignore
                    mapRef.current?.events.add('boundschange', () => {
                        // @ts-ignore
                        renewMapState(mapRef.current?.getCenter(), mapRef.current?.getZoom())
                    })
                }}
            >
                {places.map((place, index) => (
                    <Placemark
                        key={place.latlon}
                        onClick={() => {
                            setAppMode(place.id)
                        }}
                        properties={{iconContent: place.rating}}
                        defaultGeometry={[parseFloat(place.latlon.split(',')[0]), parseFloat(place.latlon.split(',')[1])]}
                        options={{
                            iconImageSize: [10, 10],
                            preset: "islands#darkBlueIcon"
                        }}
                    />
                ))}
                <SearchControl
                    sx={{
                        '& .MuiPaper-root': {col: 'absolute'}
                    }}
                    options={{
                        formLayout: 'islands#searchControlFormLayout', float: "left"}}/>

            </Map>
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