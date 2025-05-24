import React, {useContext, useRef} from 'react';
import {ThemeProvider, useTheme} from "@mui/material";
import {Map, Placemark, SearchControl, YMaps} from "@pbe/react-yandex-maps";
import {GRingContext} from "../../utils/context";
import {defaultInitialMapState} from "../../utils/constants";

const CustomMap = () => {
    const {mapState, setAppMode, places, renewMapState} = useContext(GRingContext)
    const ymaps = useRef();
    const mapRef = useRef();
    const theme = useTheme()

    return (
        <YMaps query={{apikey: '3954d170-f82d-46dc-b843-bf9cd5117be4'}}>
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
                <ThemeProvider theme={theme}>

                    <SearchControl
                        style={{...theme}}
                        options={{
                            formLayout: 'islands#searchControlFormLayout', noSuggestPanel: true, float: "left"
                        }}/>
                </ThemeProvider>
            </Map>
        </YMaps>

    );
};

export default CustomMap;