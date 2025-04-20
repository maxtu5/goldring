import React, {useContext, useEffect, useRef, useState} from 'react';
import {Box} from "@mui/material";
import {useYMaps} from "@pbe/react-yandex-maps";
import {GRingContext} from "../../utils/context";
import {defaultInitialMapState} from "../../utils/constants";

const CustomMap = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const ymaps = useYMaps(["Map", "Placemark"]);
    const [map, setMap] = useState<ymaps.Map|null>(null);

    const {setAppMode, places, mapState, renewMapState} = useContext(GRingContext)

    useEffect(() => {
        if (!ymaps || !mapRef.current) {
            return;
        }
        if (map===null) {
            setMap(new ymaps.Map(mapRef.current, mapState ? mapState : defaultInitialMapState))
        }
        map?.events.add('boundschange', () => {
            renewMapState(map.getCenter(), map.getZoom())
        })
        map?.geoObjects.removeAll()
        places.forEach((place, index) => {
            const pm = new ymaps.Placemark(
                [parseFloat(place.latlon.split(',')[0]), parseFloat(place.latlon.split(',')[1])],
                {iconContent: place.rating},
                {iconImageSize: [10, 10], preset: "islands#darkBlueIcon"}
            )
            pm.events.add('click', () => {setAppMode(place.id)})
            map?.geoObjects.add(pm)
        });
    }, [mapState, places, ymaps]);

    return (
        <Box sx={{width: 'auto', height:'calc(100vh - 64px)'}}>
            <div ref={mapRef}
                 style={{
                     width: 'auto',
                     height: "100%"
                 }}
            >
            </div>
        </Box>
    );
};

export default CustomMap;