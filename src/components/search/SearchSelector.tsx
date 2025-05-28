import React, {useContext} from 'react';
import {Box, Button, Checkbox, FormControlLabel, Stack, Typography} from "@mui/material";
import {FilterItem, ListParamTypes, SearchRequest} from "../../utils/types";
import {GRingContext} from "../../utils/context";

interface SearchSelectorProps {
    selectorState: string,
    setSelectorState: (state: string) => void,
    searchRequest: SearchRequest,
    setSearchRequest: (searchRequest: SearchRequest) => void,
    doSearch: () => void
}

const SearchSelector = ({
                            selectorState,
                            setSelectorState,
                            searchRequest,
                            setSearchRequest
                        }: SearchSelectorProps) => {
    const {genres, types, cultureStatuses} = useContext(GRingContext)

    function GenresSelector() {
        return (<Stack>
            {genres.map(option => (
                <FormControlLabel
                    control={<Checkbox
                        sx={{p: 0}}
                        size={'small'}
                        checked={searchRequest.genres.includes(option.name)}
                        onChange={(event) => handleGenreCheckBoxToggle(option.name)}
                    />}
                    label={<Typography variant={'caption'}>{option.displayName}</Typography>}
                />))}
        </Stack>)
    }

    function handleGenreCheckBoxToggle(name: string) {
        setSearchRequest({
            ...searchRequest,
            genres: searchRequest.genres.includes(name) ?
                searchRequest.genres.filter(s => s !== name) :
                [...searchRequest.genres, name]
        })
    }

    function TypeSelector() {
        return (<span>{types.map(typeGroup =>

            (<Stack direction={'row'} justifyContent={'space-between'}>
                    <Stack width={'11vw'} paddingBottom={2}>
                        {typeGroup.slice(0, typeGroup.length/2+1).map(type => (
                            <FormControlLabel
                                control={<Checkbox
                                    sx={{p: 0}}
                                    size={'small'}
                                    checked={searchRequest.types.includes(type.name)}
                                    onChange={(event) => handleTypeCheckBoxToggle(type.name)}
                                />}
                                label={<Typography variant={'caption'}>{type.displayName}</Typography>}
                            />
                        ))}
                    </Stack>
                    <Stack width={'11vw'} paddingBottom={2}>
                        {typeGroup.slice(typeGroup.length/2+1, typeGroup.length).map(type => (
                            <FormControlLabel
                                control={<Checkbox
                                    sx={{p: 0}}
                                    size={'small'}
                                    checked={searchRequest.types.includes(type.name)}
                                    onChange={(event) => handleTypeCheckBoxToggle(type.name)}
                                />}
                                label={<Typography variant={'caption'}>{type.displayName}</Typography>}
                            />
                        ))}
                    </Stack>

                </Stack>
            )
        )}</span>)
    }

    function handleTypeCheckBoxToggle(name: string) {
        setSearchRequest({
            ...searchRequest,
            types: searchRequest.types.includes(name) ?
                searchRequest.types.filter(s => s !== name) :
                [...searchRequest.types, name]
        })
    }

    function CultureStatusSelector() {
        return (<Stack>
            {cultureStatuses.map(option => (
                <FormControlLabel
                    control={<Checkbox
                        sx={{p: 0}}
                        size={'small'}
                        checked={searchRequest.cultureStatuses.includes(option.name)}
                        onChange={(event) => handleCultureStatusCheckBoxToggle(option.name)}
                    />}
                    label={<Typography variant={'caption'}>{option.displayName}</Typography>}
                />))}
        </Stack>)
    }

    function handleCultureStatusCheckBoxToggle(name: string) {
        setSearchRequest({
            ...searchRequest,
            cultureStatuses: searchRequest.cultureStatuses.includes(name) ?
                searchRequest.cultureStatuses.filter(s => s !== name) :
                [...searchRequest.cultureStatuses, name]
        })
    }

    return (
        <Box width={'25vw'} sx={{display: selectorState === 'none' ? "none" : "block"}}>

            <Stack width={'auto'} spacing={2} p={1}>

                {selectorState === 'genres' ? <GenresSelector/> : (selectorState === 'types' ? <TypeSelector/> :
                    <CultureStatusSelector/>)}

                {/*<Button onClick={() => setSelectorState('none')}>ЗАКРЫТЬ</Button>*/}

            </Stack>

        </Box>
    );
};

export default SearchSelector;