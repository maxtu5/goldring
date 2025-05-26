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
import {Filters, ListParamTypes} from "../../utils/types";
import {Subheader} from "../../utils/utils";

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

interface SideBarProps {
    searchOpen: boolean,
    setSearchOpen: (searchOpen: boolean) => void,
    showSearchResult: boolean,
    setShowSearchResult: (showSearchResult: boolean) => void
}

const SideBar = ({showSearchResult, setShowSearchResult, searchOpen, setSearchOpen}: SideBarProps) => {
    const {
        cultureStatuses,
        statuses,
        scoreRange,
        setScoreRange,
        setGlobalFilter,
        globalFilter,
        renewStatusFilters
    } = useContext(GRingContext)
    const [localFilter, setLocalFilter] = useState<Filters>({statuses:[], cultureStatuses:[], initialized: false, statusAll: false})


    useEffect(() => {
        setGlobalFilter(localFilter)
    }, [localFilter.statuses]);

    useEffect(() => {
        if (globalFilter.statuses.length!==0) setLocalFilter({...globalFilter, initialized: true})
    }, [globalFilter]);

    const handleChangeScore = (event: Event, newValue: number | number[]) => {
        setScoreRange(newValue as number[]);
    };

    const handleChangeCultureStatus = (event: SelectChangeEvent<typeof localFilter.cultureStatuses>) => {
        const {
            target: {value},
        } = event;
        setLocalFilter({...localFilter, cultureStatuses: typeof value === 'string' ? value.split(',') : value});
    };

    function searchClick() {
        setSearchOpen(!searchOpen)
    }

    function showAllClick() {
        setShowSearchResult(false)
    }

    function handleCheckBoxToggle(name: string) {
        const newFilter = {...localFilter, statuses: localFilter.statuses.includes(name) ?
                localFilter.statuses.filter(s => s !== name) :
                [...localFilter.statuses, name]
        }
        setLocalFilter(newFilter)
        renewStatusFilters(newFilter.statuses)
    }

    function handleAllCheckBoxToggle() {
        const newFilter = {
            ...localFilter,
            statuses: localFilter.statusAll ? [] : statuses,
            statusAll: !localFilter.statusAll
        }
        setLocalFilter(newFilter)
        renewStatusFilters(newFilter.statuses)
    }

    return (
        <Box
            sx={{
                width: 'auto', p: 2
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
                    <Subheader>Дата</Subheader>
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

                    <Button variant={'outlined'} onClick={searchClick}
                            sx={{margin: 1, marginBottom: 0}}>{'ПОИСК'}</Button>
                    <Button variant={'outlined'} onClick={showAllClick} disabled={!showSearchResult}
                            sx={{margin: 1}}>{'ПОКАЗАТЬ ВСЕ'}</Button>

                    {/*<Divider variant="fullWidth"/>*/}
                    <FormGroup>
                        <Box>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size={'small'}
                                        sx={{paddingTop: 0, paddingBottom: 0}}
                                        checked={localFilter.statusAll}
                                        onClick={(event) => handleAllCheckBoxToggle()}

                                    />
                                }
                                label={'ALL'}
                            />
                            {statuses.map(status => (
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            size={'small'}
                                            sx={{paddingTop: 0, paddingBottom: 0}}
                                            checked={localFilter.statuses.includes(status)}
                                            onClick={(event) => handleCheckBoxToggle(status)}
                                        />
                                    }
                                    label={status}
                                />))
                            }
                        </Box>
                    </FormGroup>
                </Stack>
            </FormControl>
        </Box>
    );
};

export default SideBar;