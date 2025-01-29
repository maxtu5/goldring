import React, {useContext} from 'react';
import {Box} from "@mui/material";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import {GRingContext} from "../../utils/context";

const CustomMap = () => {
    const {setAppMode} = useContext(GRingContext)

    return (
        <YMaps
            query={{ apikey: '3954d170-f82d-46dc-b843-bf9cd5117be4'}}
        >
            <Box bgcolor={"lightgrey"} flex={3}>
                <Map width="100%" height="100%" defaultState={{center: [56.49941, 39.67653], zoom: 9}}>
                    <Placemark
                        onClick={() => {
                            setAppMode('card')
                        }}
                        key={6}
                        defaultGeometry={[56.49941, 39.67653].map((c) => c + (Math.random() - 0.5))}
                        options={{
                            iconImageSize: [10, 10],
                            preset: "islands#yellowDotIcon"
                        }}
                    />
                </Map>
            </Box>
        </YMaps>
    );
};

export default CustomMap;