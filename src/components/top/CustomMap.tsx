import React, {useContext} from 'react';
import {Box} from "@mui/material";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import {GRingContext} from "../../utils/context";

const CustomMap = () => {
    const {setAppMode, places} = useContext(GRingContext)

    return (
        <YMaps query={{ apikey: '3954d170-f82d-46dc-b843-bf9cd5117be4'}}>
            <Box sx={{ width:'auto', height:'100%'}}>
                <Map
                    width='auto'
                    height="100%"
                    defaultState={{center: [56.49941, 39.67653], zoom: 9}}>

                    {places
                        .map((place,index)=>(
                        <Placemark

                            key={place.latlon}
                            onClick={()=>{
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
                </Map>
            </Box>
        </YMaps>
    );
};

export default CustomMap;