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

function textFieldWithCheckbox(label: string) {
    return (
        <Stack direction={'row'}>
            <TextField
                id="filled-search"
                type="search"
                variant="outlined"
                size="small"
                // defaultValue={'...'}
                label={label}
                slotProps={inputSlotProps}
            />
            <FormControlLabel
                control={<Checkbox size={'small'} sx={{paddingTop: 0, paddingBottom: 0, marginLeft: 1}}/>}
                label={<Typography variant={'caption'}>{"Точно"}</Typography>}
            />
        </Stack>
    );
}

const SearchBar = ({setSearchOpen}: SearchBarProps) => {
    const [searchRequest, setSearchRequest] = useState<SearchRequest>({types: [], genres: []})
    const [selectorOpen, setSelectorOpen] = useState(false)
    const [selectorData, setSelectorData] = useState<{
        paramtype: ListParamTypes,
        options: FilterItem[]
    }>({paramtype: ListParamTypes.NONE, options: []})

    const {
        cultureStatuses,
        genres,
        types,
        scoreRange,
        setScoreRange,
        setGlobalFilter,
        filtered,
        setFiltered
    } = useContext(GRingContext)

    function renderV(selected: string[], all: FilterItem[]): string {
        const txt = selected.map(s => all.find(t => t.name === s)?.displayName).join(", ")
        return txt.length <= 28 ? txt : txt.substring(0, 25) + '...'
    }

    function openSelector(paramType: ListParamTypes, types: FilterItem[]) {
        setSelectorData({paramtype: paramType, options: types})
        setSelectorOpen(true)
    }

    return (
        <Stack direction="row" spacing={1}   divider={<Divider orientation="vertical" flexItem />}>
            <Box
                width="25vw"
                p={2}
            >
                <Stack width={'auto'}>

                    {textFieldWithCheckbox('Название')}
                    {textFieldWithCheckbox('Архитектор')}

                    <TextField
                        variant="outlined"
                        size="small"
                        // defaultValue={''}
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

                    }}>Искать</Button>
                </Stack>
            </Box>
            <SearchSelector
                selectorOpen={selectorOpen}
                setSelectorOpen={setSelectorOpen}
                selectorData={selectorData}
                searchRequest={searchRequest}
                setSearchRequest={setSearchRequest}
            />
        </Stack>
    )
        ;
};

export default SearchBar;