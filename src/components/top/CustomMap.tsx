import React, {useContext, useMemo, useRef} from 'react';
import {createTheme, ThemeProvider, useTheme} from "@mui/material";
import {Map, Placemark, SearchControl, YMaps} from "@pbe/react-yandex-maps";
import {GRingContext} from "../../utils/context";
import {defaultInitialMapState} from "../../utils/constants";
import {blue, lime, purple} from "@mui/material/colors";

interface CustomMapProps {
    searchResult: string[],
    showSearchResult: boolean
}

const CustomMap = ({searchResult, showSearchResult}: CustomMapProps) => {
    const {mapState, setAppMode, places, renewMapState} = useContext(GRingContext)
    const ymaps = useRef();
    const mapRef = useRef();
    const theme = createTheme({
        palette: {
            primary: lime,
            secondary: purple,
        },
    });
    const visiblePlacemarks = useMemo(
        () => (showSearchResult ? places.filter(p => searchResult.includes(p.id)) : places)
            .map((place, index) => (
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
            )),
        [places, showSearchResult, searchResult]
    );

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
                {visiblePlacemarks}
                <ThemeProvider theme={theme}>

                    <SearchControl
                        style={{
                            marginLeft: '-50pt'
                        }}
                        options={{
                            formLayout: 'islands#searchControlFormLayout',
                            noSuggestPanel: true,
                            float: "left",

                            // position: {left: 10, right: 10, top:10, bottom: 10}
                        }}/>
                </ThemeProvider>
            </Map>
        </YMaps>

    );
};

export default CustomMap;