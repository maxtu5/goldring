import React, {useContext, useState} from 'react';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel, InputLabel,
    ListItemText, MenuItem, Select, SelectChangeEvent,
    Stack,
    TextField
} from "@mui/material";
import {Subheader} from "../../utils/utils";
import {GRingContext} from "../../utils/context";
import {Filters} from "../../utils/types";

const ITEM_HEIGHT = 32;
const ITEM_PADDING_TOP = 4;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

interface SearchBarProps {
    setSearchOpen: (searchOpen: boolean) => void
}

const SearchBar = ({setSearchOpen}: SearchBarProps) => {
    const [localFilter, setLocalFilter] = useState<Filters>({genres: [], types: [], cultureStatuses: []})

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

    const handleChangeType = (event: SelectChangeEvent<typeof localFilter.types>) => {
        const {
            target: {value},
        } = event;
        setLocalFilter({...localFilter, types: typeof value === 'string' ? value.split(',') : value});
    };

    const handleChangeGenre = (event: SelectChangeEvent<typeof localFilter.genres>) => {
        const {
            target: {value},
        } = event;
        setLocalFilter({...localFilter, genres: typeof value === 'string' ? value.split(',') : value});
    };

    function renderV(selected: string[]): string {
        const txt = selected.map(s => types.find(t => t.name === s)?.displayName).join(", ")
        return txt.length <= 28 ? txt : txt.substring(0, 25) + '...'
    }

    return (
        <Box
            width="25vw"
            p={2}
        >
            <FormControl size="small">
                <Stack width={'auto'}>

                    <Stack direction={'row'}>
                        <TextField
                            id="filled-search"
                            type="search"
                            variant="outlined"
                            size="small"
                            defaultValue={'...'}
                            label="Название"
                            slotProps={{
                                input: {
                                    sx: {
                                        marginBottom: 2,
                                        marginTop: 1,
                                        marginRight: 1
                                    },
                                }
                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox sx={{paddingTop: 0, paddingBottom: 0}} defaultChecked/>}
                            label="Точно"/>
                    </Stack>

                    <TextField
                        variant="outlined"
                        size="small"
                        defaultValue={'...'}
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

                    <FormControl sx={{marginBottom: 2}}>
                        <InputLabel shrink htmlFor="select-types">
                            Типы
                        </InputLabel>
                        <Select
                            multiple
                            size="small"
                            value={localFilter.types}
                            onChange={handleChangeType}
                            renderValue={(selected) => renderV(selected)}
                            MenuProps={MenuProps}
                            label="Типы"
                            inputProps={{
                                id: 'select-types',
                            }}
                        >
                            {types.map((type) => (
                                <MenuItem key={type.name} value={type.name}>
                                    <Checkbox sx={{p: 0}} checked={localFilter.types.includes(type.name)}/>
                                    <ListItemText primary={type.displayName}/>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl sx={{marginBottom: 1}}>
                        <InputLabel shrink htmlFor="select-styles">
                            Стили
                        </InputLabel>
                        <Select
                            multiple
                            size="small"
                            value={localFilter.genres}
                            onChange={handleChangeGenre}
                            renderValue={(selected) => `${selected.length} выбрано`}
                            MenuProps={MenuProps}
                            label="Стили"
                            inputProps={{
                                id: 'select-styles',
                            }}
                        >
                            {genres.map((genre) => (
                                <MenuItem sx={{p: 0}} key={genre.name} value={genre.name}>
                                    <Checkbox sx={{p: 0}} checked={localFilter.genres.includes(genre.name)}/>
                                    <ListItemText primary={genre.displayName}/>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Subheader>
                        Архитектор
                    </Subheader>
                    <TextField
                        variant="outlined"
                        size="small"
                        defaultValue={'...'}
                        slotProps={{
                            input: {
                                sx: {
                                    marginBottom: 2,
                                    marginTop: 1
                                },
                            }
                        }}
                    />
                    <FormControlLabel
                        control={<Checkbox sx={{paddingTop: 0, paddingBottom: 0}} defaultChecked/>}
                        label="Точное соответствие"/>

                    <FormControl sx={{m: 1, minWidth: 120, maxWidth: 300}}>
                        <InputLabel shrink htmlFor="select-multiple-native">
                            Native
                        </InputLabel>
                        <Select<string[]>
                            multiple
                            native
                            // value={'dcnbjv'}
                            // @ts-ignore Typings are not considering `native`
                            // onChange={handleChangeMultiple}
                            label="Native"
                            inputProps={{
                                id: 'select-multiple-native',
                            }}
                        >

                        </Select>
                    </FormControl>

                    <Button onClick={() => setSearchOpen(false)}>ПОИСК</Button>
                </Stack>
            </FormControl>
        </Box>
    )
        ;
};

export default SearchBar;