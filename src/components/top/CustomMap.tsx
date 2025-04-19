import React, {useContext, useEffect, useRef} from 'react';
import {Box} from "@mui/material";
import {Map, Placemark, useYMaps, YMaps} from "@pbe/react-yandex-maps";
import {GRingContext} from "../../utils/context";
import {defaultInitialMapState} from "../../utils/constants";

const CustomMap = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const ymaps = useYMaps(["Map"]);

    const {setAppMode, places, mapState, renewMapState} = useContext(GRingContext)

    useEffect(() => {
        if (!ymaps || !mapRef.current) {
            return;
        }
        console.log('mapRef.current');
        console.log(mapState);

        const map = new ymaps.Map(mapRef.current, mapState ? mapState : defaultInitialMapState);
        map.events.add('boundschange', ()=>{
            console.log('mooov');
            renewMapState(map.getCenter(), map.getZoom())
        })
        map.events.add('click', ()=>{
            console.log('click');
            console.log(mapState);

        })
    }, [mapState, renewMapState, ymaps]);

    return (
            <Box sx={{ width:'auto', height:'100%'}}>
                <div ref={mapRef}
                     style={{
                         width:'auto',
                         height:"100%"
                     }}

                    // defaultState={mapState}
                    // instanceRef={inst =>{
                    //     if (inst) inst.events.add('boundschange', ()=>{
                    //         renewMapState(inst.getCenter(), inst.getZoom())
                    //     })
                    // }}
                >

                    {/*{places*/}
                    {/*    .map((place,index)=>(*/}
                    {/*    <Placemark*/}

                    {/*        key={place.latlon}*/}
                    {/*        onClick={()=>{*/}
                    {/*            setAppMode(place.id)*/}
                    {/*        }}*/}
                    {/*        properties={{iconContent: place.rating}}*/}

                    {/*        defaultGeometry={[parseFloat(place.latlon.split(',')[0]), parseFloat(place.latlon.split(',')[1])]}*/}
                    {/*        options={{*/}

                    {/*            iconImageSize: [10, 10],*/}
                    {/*            preset: "islands#darkBlueIcon"*/}
                    {/*        }}*/}
                    {/*    />*/}
                    {/*))}*/}
                </div>
            </Box>

    );
};

export default CustomMap;