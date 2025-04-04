import React, {useContext} from 'react';
import {Box, Link, Stack, Typography} from "@mui/material";
import {FullPlace} from "../../utils/types";
import {GRingContext} from "../../utils/context";

interface Props {
    place: FullPlace
}

const ObjectDataPanel = ({place}: Props) => {
    const {genres, types, linkPrefixes} = useContext(GRingContext)

    function typoLine(text: string) {
        return (
            <Typography>
                {text}
            </Typography>
        );
    }

    function reduceLink(link: string, last: boolean) {
        const lpfx = linkPrefixes.filter(lp=>link.indexOf(lp) !== -1);
        return lpfx.length===0 ? link : lpfx[0] + (last? "" : ", ");
    }

    function genresList(place: FullPlace): string {
        return place.genres.length === 0 ? "" :place.genres
            .map(gc => genres[genres.findIndex(g => g.name === gc)].displayName)
            .join(', ')+'. '
    }

    return (
        <Box width={"auto"} p={2}>
            <Stack direction={"column"} justifyContent={"space-between"}>
                <Typography
                    variant="h6"
                    sx={{lineHeight:'1.2', paddingRight:'20px'}}>
                    {`${place.name} (${place.latlon})`}
                </Typography>

                {typoLine(`${place.date}. ${genresList(place)}${place.cultureStatus}`)}

                {typoLine(place.types.length === 0 ? "" :
                    place.types
                        .map(gc => types[types.findIndex(g => g.name === gc)].displayName)
                        .join(', ') + '. ' + (place.architects.length === 0 ? "" :
                        (place.architects.indexOf(",") >=0 ? 'Архитекторы: ' : 'Архитектор: ') + place.architects))}
                {typoLine(place.description)}
                <Stack direction={"row"}>
                {place.pages.map((link, index)=>
                        <Link marginRight={1} href={link}>{reduceLink(link, index===place.pages.length-1)}</Link>)}
                </Stack>
                <Typography
                    variant="caption"
                    align='right'>
                    {place.address}. Добавлено: {place.dateAdded}
                </Typography>
            </Stack>
        </Box>
    );
};

export default ObjectDataPanel;