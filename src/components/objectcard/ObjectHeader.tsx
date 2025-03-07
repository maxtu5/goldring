import React, {useContext} from 'react';
import {Box, Button, Rating, Stack, Typography} from "@mui/material";
import {GRingContext} from "../../utils/context";

const ObjectHeader = () => {
    const {setAppMode} = useContext(GRingContext)

    function returnToMap() {
        setAppMode('map')
    }

    return (
        <Box width={"auto"}>
            <Stack direction={{xs: "column", sm: "row"}} justifyContent={"space-between"} alignItems={"center"} bgcolor={"lightgray"}>
                <Stack>
                    <Typography p={[0, 0, 0, 1]} variant={"h6"}>Жилой дом</Typography>
                    <Stack direction={"row"} alignItems={"center"}>
                        <Box p={[0, 0, 0, 1]}>
                            <Rating name="half-rating" readOnly={true} defaultValue={3.8} precision={0.1}/>
                        </Box>
                        <Typography>3.8</Typography>
                    </Stack>
                </Stack>
                <Box p={1}>
                    <Button onClick={returnToMap}>ВЕРНУТЬСЯ К КАРТЕ</Button>
                </Box>
            </Stack>
        </Box>
    );
};

export default ObjectHeader;