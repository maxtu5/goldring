import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import {FullPlace} from "../../utils/types";

const _linkRegex = /\$L\{https?:\/\/.+?:.+?\}/
const linkRegex = new RegExp(
    _linkRegex.source,
    _linkRegex.flags + "g",
);

interface Props {
    place: FullPlace
}

const ObjectDataPanel = ({place}: Props) => {

        return (
            <Box width={"auto"} height={"20vh"} p={2}>
                <Stack direction={"column"} height={'100%'} justifyContent={"space-between"}>
                    <span>
                    {place.bigLines.map((line, lineOrder) => {
                        if (line.includes('$L')) {
                            const linx = line.matchAll(linkRegex);
                            let textToParse = line
                            const allLinks: string[] = []
                            const allDisplayNames: string[] = []
                            const allDividers: string[] = []
                            for (const match of linx) {
                                allLinks.push(match[0].substring(3, match[0].lastIndexOf(':')));
                                allDisplayNames.push(match[0].substring(match[0].lastIndexOf(':') + 1, match[0].length - 1));
                                const fragments = textToParse.split(match[0])
                                allDividers.push(fragments[0])
                                textToParse = fragments[1]
                            }
                            return (<div>
                                {allLinks.map((link, index) => {
                                    return (<span>{allDividers[index]}<a href={link} target="_blank">{allDisplayNames[index]}</a></span>)
                                })}
                                <span>{textToParse}</span>
                            </div>)
                        } else return (lineOrder === 0 ?
                                // <div><b>{line}</b></div> :
                                <Typography variant={'h6'} sx={{lineHeight: '1.2'}}>
                                    {line}
                                </Typography> :
                                <div>{line}</div>
                        )
                    })}
                    </span>
                    <Typography variant="caption" align='right'>
                        {place.smallLine}
                    </Typography>

                </Stack>
            </Box>
        );
    }
;

export default ObjectDataPanel;