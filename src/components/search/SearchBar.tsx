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

const ITEM_HEIGHT = 32;
const ITEM_PADDING_TOP = 4;
const inputSlotProps = {
    input: {
        sx: {
            marginBottom: 2,
            marginTop: 1
        },
    }
}

interface SearchBarProps {
    setSearchOpen: (searchOpen: boolean) => void
}

const SearchBar = ({setSearchOpen}: SearchBarProps) => {
    const [searchRequest, setSearchRequest] = useState<SearchRequest>(emptySearchRequest)
    const [selectorOpen, setSelectorOpen] = useState(false)
    const [selectorData, setSelectorData] = useState<{
        paramtype: ListParamTypes,
        options: FilterItem[]
    }>({paramtype: ListParamTypes.NONE, options: []})

    const {genres, types, setSearchResult} = useContext(GRingContext)

    function textFieldWithCheckbox(label: string, fieldName: string) {
        return (
            <Stack direction={'row'}>
                <TextField
                    type="search" variant="outlined" size="small"
                    label={label}
                    onChange={event => setSearchRequest({...searchRequest, [fieldName]: event.target.value})}
                    slotProps={inputSlotProps}
                />
                <FormControlLabel
                    control={<Checkbox size={'small'} sx={{paddingTop: 0, paddingBottom: 0, marginLeft: 1}}
                                       onChange={event => {
                                           console.log(event.target);
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

    function renderV(selected: string[], all: FilterItem[]): string {
        const txt = selected.map(s => all.find(t => t.name === s)?.displayName).join(", ")
        return txt.length <= 28 ? txt : txt.substring(0, 25) + '...'
    }

    function openSelector(paramType: ListParamTypes, types: FilterItem[]) {
        setSelectorData({paramtype: paramType, options: types})
        setSelectorOpen(true)
    }

    function doSearch() {
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
                setSearchResult({show: true, found: data.map(p => p.id)})
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


                    {textFieldWithCheckbox('Название', 'name')}
                    {textFieldWithCheckbox('Архитектор', 'architect')}

                    <TextField
                        variant="outlined"
                        size="small"
                        onChange={event => setSearchRequest({...searchRequest, address: event.target.value})}
                        label="Адрес"
                        slotProps={{
                            input: {
                                sx: {
                                    marginBottom: 2,
                                    marginTop: 1
                                },
                            }
                        }}
                    />

                    <TextField variant="outlined" size="small"
                               label={"Типы"}
                               value={searchRequest.types.length === 0 ? "" : renderV(searchRequest.types, types)}
                               onClick={() => openSelector(ListParamTypes.TYPES, types)}
                               slotProps={inputSlotProps}
                    />

                    <TextField variant="outlined" size="small"
                               label={"Стили"}
                               value={searchRequest.genres.length === 0 ? "" : renderV(searchRequest.genres, genres)}
                               onClick={() => openSelector(ListParamTypes.GENRES, genres)}
                               slotProps={inputSlotProps}
                    />

                    <Button onClick={() => {
                        doSearch()
                    }}>Искать</Button>

                </Stack>
            </Box>
            <SearchSelector
                selectorOpen={selectorOpen}
                setSelectorOpen={setSelectorOpen}
                selectorData={selectorData}
                searchRequest={searchRequest}
                setSearchRequest={setSearchRequest}
                doSearch={doSearch}
            />
        </Stack>
    );
};

export default SearchBar;