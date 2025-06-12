import {styled, Typography} from "@mui/material";

export function parseAddress(address) {
    const retval = (address.region === 'MOSCOW_REGION' ? 'Московская обл., ' : address.region + " ") +
        (address.settlement === null ? "" : address.settlement+", ") +
        (address.street === null ? "" : address.street+", ") +
        (address.number === null ? "" : address.number)
    return retval;
}

export function latlonStringToNumbers(latlonString) {
    // console.log(latlonString);
    return latlonString.split(',').map(s => parseFloat(s))
}

export const Subheader = styled(Typography)(({theme}) => ({
        variant: "h6",
        paddingTop: 10
    })
)