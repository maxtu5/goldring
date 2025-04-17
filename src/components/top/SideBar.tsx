import React, {useContext, useEffect, useState} from 'react';
import {
    Box,
    Button,
    Checkbox, Divider, FormControl, FormControlLabel, FormGroup, InputAdornment,
    ListItemText,
    MenuItem,
    Select,
    SelectChangeEvent,
    Slider,
    Stack,
    styled,
    Switch, TextField,
    Typography
} from "@mui/material";
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from "@mui/x-date-pickers";
import SearchIcon from '@mui/icons-material/Search';

import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {GRingContext} from "../../utils/context";
import {Filters} from "../../utils/types";


const SideBar = () => {
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

    useEffect(() => {
        setGlobalFilter(localFilter)
    }, [localFilter, setGlobalFilter]);

    const Subheader = styled(Typography)(({theme}) => ({
            variant: "h6",
            paddingTop: 10
        })
    )

    const handleChangeScore = (event: Event, newValue: number | number[]) => {
        setScoreRange(newValue as number[]);
    };

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

    const handleChangeGenre = (event: SelectChangeEvent<typeof localFilter.genres>) => {
        const {
            target: {value},
        } = event;
        setLocalFilter({...localFilter, genres: typeof value === 'string' ? value.split(',') : value});
    };

    const handleChangeType = (event: SelectChangeEvent<typeof localFilter.types>) => {
        const {
            target: {value},
        } = event;
        setLocalFilter({...localFilter, types: typeof value === 'string' ? value.split(',') : value});
    };

    const handleChangeCultureStatus = (event: SelectChangeEvent<typeof localFilter.cultureStatuses>) => {
        const {
            target: {value},
        } = event;
        setLocalFilter({...localFilter, cultureStatuses: typeof value === 'string' ? value.split(',') : value});
    };

    const marks = [
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        },
        {
            value: 5,
            label: '5',
        }
    ];

    function valuetext(value: number) {
        return `${value}`;
    }


    function filterclick() {
        if (filtered) setLocalFilter({...localFilter, genres: [], types: [], cultureStatuses: []})
        setFiltered(!filtered)
    }

    function renderV(selected: string[]): string {
        const txt = selected.map(s => types.find(t => t.name === s)?.displayName).join(", ")
        return txt.length <= 28 ? txt : txt.substring(0, 25) + '...'
    }

    return (
        <Box
            sx={{
                width: 'auto', p:2
            }}
        >
            <FormControl size="small">
                <Stack width={'auto'}>
                    <Subheader>
                        Рейтинг
                    </Subheader>
                    <Slider
                        getAriaValueText={valuetext}
                        onChange={handleChangeScore}
                        value={scoreRange}
                        min={1}
                        max={5}
                        step={0.1}
                        marks={marks}
                        valueLabelDisplay="auto"
                    />
                    <Subheader>
                        Дата
                    </Subheader>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack direction={"row"} spacing={2}>
                            <DatePicker slotProps={{textField: {size: 'small'}}}
                                        minDate={dayjs('1012-01-01', 'YYYY-MM-DD')} label={'от'} views={['year']}
                                        openTo='year'/>
                            <DatePicker slotProps={{textField: {size: 'small'}}}
                                        minDate={dayjs('1012-01-01', 'YYYY-MM-DD')} label={'до'} views={['year']}
                                        openTo='year'/>
                        </Stack>
                    </LocalizationProvider>
                    <Subheader>
                        Стили
                    </Subheader>
                    <Select
                        id="demo-multiple-checkbox"
                        multiple
                        value={localFilter.genres}
                        onChange={handleChangeGenre}
                        renderValue={(selected) => `${selected.length} выбрано`}
                        MenuProps={MenuProps}
                    >
                        {genres.map((genre) => (
                            <MenuItem sx={{p: 0}} key={genre.name} value={genre.name}>
                                <Checkbox sx={{p: 0}} checked={localFilter.genres.includes(genre.name)}/>
                                <ListItemText primary={genre.displayName}/>
                            </MenuItem>
                        ))}
                    </Select>
                    <Subheader>
                        Тип
                    </Subheader>
                    <Select
                        id="demo-multiple-checkbox"
                        multiple
                        value={localFilter.types}
                        onChange={handleChangeType}
                        renderValue={(selected) => renderV(selected)}
                        MenuProps={MenuProps}
                    >
                        {types.map((type) => (
                            <MenuItem key={type.name} value={type.name}>
                                <Checkbox sx={{p: 0}} checked={localFilter.types.includes(type.name)}/>
                                <ListItemText primary={type.displayName}/>
                            </MenuItem>
                        ))}
                    </Select>
                    <Subheader>
                        Культурный статус
                    </Subheader>
                    <Select
                        id="demo-multiple-checkbox"
                        multiple
                        value={localFilter.cultureStatuses}
                        onChange={handleChangeCultureStatus}
                        renderValue={(selected) => `${selected.length} выбрано`}
                        MenuProps={MenuProps}
                    >
                        {cultureStatuses.map((status) => (
                            <MenuItem key={status.name} value={status.name}>
                                <Checkbox sx={{p: 0}} checked={localFilter.cultureStatuses.includes(status.name)}/>
                                <ListItemText primary={status.displayName}/>
                            </MenuItem>
                        ))}
                    </Select>
                    <Stack direction={"row"} justifyContent={"space-between"} alignContent={"center"}>
                        <Subheader>Уже видел</Subheader>
                        <Switch defaultChecked/>
                    </Stack>

                    <Button variant={'outlined'} onClick={filterclick}
                            sx={{margin: 2}}>{filtered ? 'СБРОСИТЬ ФИЛЬТРЫ' : 'ПРИМЕНИТЬ ФИЛЬТРЫ'}</Button>

                    {/*<Divider variant="fullWidth"/>*/}

                    {/*<TextField*/}
                    {/*    id="filled-search"*/}
                    {/*    type="search"*/}
                    {/*    variant="outlined"*/}
                    {/*    size="small"*/}
                    {/*    defaultValue={'...поиск'}*/}
                    {/*    slotProps={{*/}
                    {/*        input: {*/}
                    {/*            sx: {*/}
                    {/*                marginBottom:2,*/}
                    {/*                marginTop:1*/}
                    {/*            },*/}
                    {/*            startAdornment: (*/}
                    {/*                <InputAdornment position="start">*/}
                    {/*                    <SearchIcon/>*/}
                    {/*                </InputAdornment>*/}
                    {/*            )*/}
                    {/*        }*/}
                    {/*    }}*/}
                    {/*/>*/}
                    {/*<FormGroup>*/}
                    {/*    <FormControlLabel control={<Checkbox sx= {{paddingTop:0, paddingBottom:0}} defaultChecked/>} label="Название"/>*/}
                    {/*    <FormControlLabel  control={<Checkbox sx= {{paddingTop:0, paddingBottom:0}} defaultChecked/>} label="Адрес"/>*/}
                    {/*    <FormControlLabel  control={<Checkbox sx= {{paddingTop:0, paddingBottom:0}} defaultChecked/>} label="Архитектор"/>*/}
                    {/*</FormGroup>*/}
                </Stack>
            </FormControl>
        </Box>
    );
};

export default SideBar;