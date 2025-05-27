import React, {useContext, useState} from 'react';
import {
    Box,
    Button,
    Checkbox, Divider,
    FormControl,
    FormControlLabel,
    InputLabel,
    Select,
    Stack,
    TextField, Typography
} from "@mui/material";
import {Subheader} from "../../utils/utils";
import {GRingContext} from "../../utils/context";
import {FilterItem, ListParamTypes, SearchRequest} from "../../utils/types";
import SearchSelector from './SearchSelector';
import {base_url, emptySearchRequest, exactlySuffix, url_getinitial, url_search} from "../../utils/constants";
import {initialDataLocal} from "../../utils/data";

interface SearchBarProps {
    searchRequest: SearchRequest,
    setSearchRequest: (searchRequest: SearchRequest) => void,
    setSearchOpen: (searchOpen: boolean) => void,
    setShowSearchResult: (show: boolean) => void,
    setSearchResult: (searchResult: string[]) => void
}

const SearchBar = ({searchRequest, setSearchRequest, setSearchOpen, setSearchResult, setShowSearchResult}: SearchBarProps) => {
    const [selectorState, setSelectorState] = useState('none')
    const {genres, types, cultureStatuses} = useContext(GRingContext)

    function textFieldWithCheckbox(label: string, fieldName: string, defaultValue: string) {
        return (
            <Stack direction={'row'} paddingBottom={2} justifyContent={'space-between'}>
                <TextField
                    sx={{width: '100%'}}
                    type="search" variant="outlined" size="small"
                    label={label}
                    defaultValue={defaultValue}
                    onChange={event => setSearchRequest({...searchRequest, [fieldName]: event.target.value})}
                />
                <FormControlLabel
                    sx={{marginRight:0, marginLeft: 1}}
                    labelPlacement={'bottom'}
                    control={<Checkbox size={'small'} sx={{p: 0}}
                                       onChange={event => {
                                           setSearchRequest({
                                               ...searchRequest, [fieldName + exactlySuffix]: event.target.checked
                                           })
                                       }
                                       }/>}
                    label={<Typography variant={'caption'}>{"Точно"}</Typography>}
                />
            </Stack>
        );
    }

    function listGenres(selectedGenres: string[], allGenres: FilterItem[]): string {
        return selectedGenres.map(s => allGenres.find(t => t.name === s)?.displayName).join(", ")
    }

    function listCultureStatuses(selectedStatuses: string[], allGenres: FilterItem[]): string {
        return selectedStatuses.map(s => allGenres.find(t => t.name === s)?.displayName).join(", ")
    }

    function listTypes(selectedTypes: string[], allTypes: FilterItem[][]) {
        return selectedTypes.map(s => allTypes.flatMap(ta=>[...ta])
            .find(t => t.name === s)?.displayName).join(", ")
    }

    function doSearch() {
        console.log(searchRequest);
        fetch(`${base_url}${url_search}`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(searchRequest)
            })
            .then(response => response.json())
            .then(data => {
                console.log('got it')
                // @ts-ignore
                setSearchResult(data.map(p => p.id))
                setShowSearchResult(true)
            })
        setSearchOpen(false)
    }

    return (
        <Stack direction="row" spacing={1} divider={<Divider orientation="vertical" flexItem/>}>
            <Box
                width="25vw"
                p={2}
            >
                <Stack width={'auto'}>

                    {textFieldWithCheckbox('Название', 'name', searchRequest.name)}
                    {textFieldWithCheckbox('Архитектор', 'architect', searchRequest.architect)}

                    <TextField
                        variant="outlined" size="small" sx={{paddingBottom: 2}}
                        onChange={event => setSearchRequest({...searchRequest, address: event.target.value})}
                        label="Адрес"
                    />

                    <Button variant={'outlined'} sx={{paddingBottom: 1}} onClick={()=> setSelectorState(selectorState==='none' ? 'types' : (selectorState==='types' ? 'none' : selectorState))}>Типы</Button>
                    <Typography sx={{paddingBottom: 2}}>{searchRequest.types.length === 0 ? "" : listTypes(searchRequest.types, types)}</Typography>

                    <Button variant={'outlined'} sx={{paddingBottom: 1}} onClick={()=> setSelectorState(selectorState==='none' ? 'genres' : (selectorState==='genres' ? 'none' : selectorState))}>Стили</Button>
                    <Typography sx={{paddingBottom: 2}}>{searchRequest.genres.length === 0 ? "" : listGenres(searchRequest.genres, genres)}</Typography>

                    <Button variant={'outlined'} sx={{paddingBottom: 1}} onClick={()=> setSelectorState(selectorState==='none' ? 'cultureStatuses' : (selectorState==='cultureStatuses' ? 'none' : selectorState))}>Культурные статусы</Button>
                    <Typography sx={{paddingBottom: 2}}>{searchRequest.cultureStatuses.length === 0 ? "" : listCultureStatuses(searchRequest.cultureStatuses, cultureStatuses)}</Typography>

                    <Button variant={'outlined'} onClick={doSearch}>Искать</Button>

                </Stack>
            </Box>
            <SearchSelector
                selectorState={selectorState}
                setSelectorState={setSelectorState}
                searchRequest={searchRequest}
                setSearchRequest={setSearchRequest}
                doSearch={doSearch}
            />
        </Stack>
    );
};

export default SearchBar;