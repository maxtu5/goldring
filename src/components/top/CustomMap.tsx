import React, {useContext, useEffect, useMemo, useRef, useState} from 'react';
import {Map, ObjectManager, Placemark, SearchControl, YMaps} from "@pbe/react-yandex-maps";
import {GRingContext} from "../../utils/context";
import {defaultInitialMapState} from "../../utils/constants";
import {latlonStringToNumbers} from "../../utils/utils";
import {LightPlace} from "../../utils/types";

interface CustomMapProps {
    searchResult: string[],
    showSearchResult: boolean
}

const CustomMap = ({searchResult, showSearchResult}: CustomMapProps) => {
    const {mapState, setAppMode, places, renewMapState} = useContext(GRingContext)
    const ymaps = useRef();
    const mapRef = useRef();
    const [localSearchResult, setLocalSearchResult] = useState<{searchResult: string[], showSearchResult: boolean}>({searchResult: [], showSearchResult: false})
    const [bounds, setBounds] = useState<number[][]>([])


    function calcBounds(places: LightPlace[], searchResult: string[]) {
        if (searchResult.length === 0) return []
        const filteredPlaces = places.filter(place => searchResult.includes(place.id)).map(place => latlonStringToNumbers(place.latlon))
        console.log(filteredPlaces)
        const maxLat = Math.max(...filteredPlaces.map(place => place[0]));
        const minLat = Math.min(...filteredPlaces.map(place => place[0]));
        const maxLon = Math.max(...filteredPlaces.map(place => place[1]));
        const minLon = Math.min(...filteredPlaces.map(place => place[1]));
        const retval = [[minLat, maxLon], [maxLat, minLon], [maxLat, minLon], [minLat, maxLon]];
        console.log(retval)
        return retval
    }

    useEffect(() => {
        setLocalSearchResult({searchResult: searchResult, showSearchResult: showSearchResult})
        // @ts-ignore
        // if (showSearchResult && mapRef.current) mapRef.current.setBounds(mapRef.current.geoObjects.getBounds())
        if (mapRef.current) {
            // @ts-ignore
            console.log(mapRef.current.geoObjects.getBounds())
            // setBounds(calcBounds(places, searchResult))
        }
    }, [showSearchResult, searchResult]);
    // iuazplzqiffpovqq
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
                <ObjectManager
                    options={{
                        clusterize: false,
                    }}
                    objects={{
                        preset: "islands#darkBlueIcon",
                        iconImageSize: [10, 10]
                    }}
                    // @ts-ignore
                    onClick={(event) => setAppMode(event._sourceEvent._sourceEvent.originalEvent.objectId)}
                    filter={(p: LightPlace) => localSearchResult.showSearchResult ? localSearchResult.searchResult.includes(p.id) : true}
                    features={places.map(place => ({
                            type: "Feature",
                            id: place.id,
                            geometry: {
                                type: "Point",
                                coordinates: latlonStringToNumbers(place.latlon),
                            },
                            properties: {
                                iconContent: place.rating
                            }
                        }
                    ))}
                />

                {/*{bounds.map(point=>(*/}
                {/*    <Placemark*/}
                {/*        defaultGeometry={point}*/}
                {/*        options={{*/}
                {/*            iconImageSize: [10, 10],*/}
                {/*            preset: "islands#redIcon"*/}
                {/*        }}*/}

                {/*    />*/}
                {/*))}*/}

                <SearchControl
                    options={{
                        noSuggestPanel: true,
                        float: "left",
                        // position: {left: 10, right: 10, top:10, bottom: 10}
                    }}/>
            </Map>
        </YMaps>

    );
};

export default CustomMap;