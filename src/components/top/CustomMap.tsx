import React, {useContext, useEffect, useMemo, useRef, useState} from 'react';
import {Box, Button, Drawer} from "@mui/material";
import {useYMaps} from "@pbe/react-yandex-maps";
import {GRingContext} from "../../utils/context";
import {defaultInitialMapState} from "../../utils/constants";
import SearchBar from "../search/SearchBar";

interface CustomMapProps {
    searchOpen: boolean,
    setSearchOpen: (searchOpen: boolean) => void
}

const CustomMap = ({searchOpen, setSearchOpen}: CustomMapProps) => {
    const containerRef = useRef(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const ymaps = useYMaps(["Map", "Placemark"]);
    // const [map, setMap] = useState<ymaps.Map|null>(null);
    const {setAppMode, places, mapState, renewMapState} = useContext(GRingContext)

    const amap = useMemo(()=>{
        if (!ymaps || !mapRef.current) {
            return null;
        }
        const mappie = new ymaps.Map(mapRef.current, mapState ? mapState : defaultInitialMapState);
        console.log('init map');
        mappie?.events.add('boundschange', () => {
            renewMapState(mappie.getCenter(), mappie.getZoom())
        })
        mappie?.geoObjects.removeAll()
        places.forEach((place, index) => {
            const pm = new ymaps.Placemark(
                [parseFloat(place.latlon.split(',')[0]), parseFloat(place.latlon.split(',')[1])],
                {iconContent: place.rating},
                {iconImageSize: [10, 10], preset: "islands#darkBlueIcon"}
            )
            pm.events.add('click', () => {setAppMode(place.id)})
            mappie?.geoObjects.add(pm)
            return mappie
        });
    }, [places, mapState, ymaps])

    return (
        <Box
            ref={containerRef}
            sx={{width: 'auto', height:'calc(100vh - 64px)',
                position: "relative",
            }}
        >
            <div ref={mapRef}
                 style={{
                     width: 'auto',
                     height: "100%"
                 }}
            >
            </div>
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
                    '& .MuiPaper-root': { position: 'absolute' }}}
            >
                <SearchBar setSearchOpen={setSearchOpen}/>
            </Drawer>
        </Box>
    );
};

export default CustomMap;