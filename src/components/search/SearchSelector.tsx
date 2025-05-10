import React from 'react';
import {Box, Button, Checkbox, FormControlLabel, Stack, Typography} from "@mui/material";
import {FilterItem, ListParamTypes, SearchRequest} from "../../utils/types";

interface SearchSelectorProps {
    selectorOpen: boolean,
    setSelectorOpen: (open: boolean) => void,
    selectorData: {
        paramtype: ListParamTypes,
        options: FilterItem[]
    }
    searchRequest: SearchRequest,
    setSearchRequest: (searchRequest: SearchRequest) => void,
    doSearch: ()=> void
}

const SearchSelector = ({
                            selectorOpen,
                            setSelectorOpen,
                            selectorData,
                            searchRequest,
                            setSearchRequest
                        }: SearchSelectorProps) => {

    function handleCheckBoxToggle(name: string) {
        if (selectorData.paramtype === ListParamTypes.TYPES)
            setSearchRequest({
                ...searchRequest,
                types: searchRequest.types.includes(name) ? searchRequest.types.filter(s => s !== name) :
                    [...searchRequest.types, name]
            })

        if (selectorData.paramtype === ListParamTypes.GENRES)
            setSearchRequest({
                ...searchRequest,
                genres: searchRequest.genres.includes(name) ? searchRequest.genres.filter(s => s !== name) :
                    [...searchRequest.genres, name]
            })
    }

    function toFieldName(paramtype: ListParamTypes): string {
        if (paramtype === ListParamTypes.TYPES) return 'types'
        if (paramtype === ListParamTypes.GENRES) return 'genres'
        return 'none'
    }

    return (
        <Box width={'25vw'}
             sx={{display: selectorOpen ? "block" : "none"}}
        >
            <Stack
                width="auto"
                p={2}
                // bgcolor={'yellow'}
            >
                <Typography variant={'body1'} align={'center'}>
                    {selectorData.paramtype === ListParamTypes.TYPES ? 'Типы' : 'Стили'}
                </Typography>
                <Box>
                    {selectorData.options.map(option => (
                        <FormControlLabel
                            control={<Checkbox
                                sx={{p: 0}}
                                size={'small'}
                                // @ts-ignore
                                checked={searchRequest[toFieldName(selectorData.paramtype)].includes(option.name)}
                                onChange={(event) => handleCheckBoxToggle(option.name)}
                            />}
                            label={<Typography variant={'caption'}>{option.displayName}</Typography>}
                        />
                    ))}
                </Box>
                <Button onClick={() => setSelectorOpen(false)}>ЗАКРЫТЬ</Button>
            </Stack>
        </Box>
    );
};

export default SearchSelector;