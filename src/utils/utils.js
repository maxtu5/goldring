export function parseAddress(address) {
    const retval = (address.region === 'MOSCOW_REGION' ? 'Московская обл., ' : address.region + " ") +
        (address.settlement === null ? "" : address.settlement+", ") +
        (address.street === null ? "" : address.street+", ") +
        (address.number === null ? "" : address.number)
    return retval;
}