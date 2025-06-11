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
import {Filters, ListParamTypes, SearchRequest} from "../../utils/types";
import {Subheader} from "../../utils/utils";
import {emptySearchRequest} from "../../utils/constants";

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
    setShowSearchResult: (showSearchResult: boolean) => void,
    setSearchRequest: (req: SearchRequest) => void,
    mapSearch: string,
    setMapSearch: (s: string) => void
}

const SideBar = ({
                     showSearchResult,
                     setShowSearchResult,
                     searchOpen,
                     setSearchOpen,
                     setSearchRequest,
                     mapSearch,
                     setMapSearch
                 }: SideBarProps) => {
    const {
        statuses,
        scoreRange,
        setScoreRange,
        setGlobalFilter,
        globalFilter,
        renewStatusFilters
    } = useContext(GRingContext)
    const [localFilter, setLocalFilter] = useState<Filters>({
        statuses: [],
        cultureStatuses: [],
        initialized: false,
        statusAll: false
    })


    useEffect(() => {
        setGlobalFilter(localFilter)
    }, [localFilter.statuses]);

    useEffect(() => {
        if (globalFilter.statuses.length !== 0) setLocalFilter({...globalFilter, initialized: true})
    }, [globalFilter]);

    const handleChangeScore = (event: Event, newValue: number | number[]) => {
        setScoreRange(newValue as number[]);
    };

    function searchClick() {
        setSearchOpen(!searchOpen)
    }

    function showAllClick() {
        setShowSearchResult(false)
        setSearchRequest(emptySearchRequest)
    }

    function handleCheckBoxToggle(name: string) {
        const newFilter = {
            ...localFilter, statuses: localFilter.statuses.includes(name) ?
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
        <Box sx={{width: 'auto', p: 2}}>

            <TextField onChange={(event)=>setMapSearch(event.target.value)}></TextField>

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

                    <Stack direction={"row"} justifyContent={"space-between"} alignContent={"center"}>
                        <Subheader>Уже видел</Subheader>
                        <Switch defaultChecked/>
                    </Stack>

                    <Stack direction={'row'} spacing={1} marginBottom={2}>
                        <Button variant={'contained'} onClick={searchClick}
                                sx={{width: '100%'}}>{'ФИЛЬТРОВАТЬ'}</Button>
                        <Button variant={'contained'} onClick={showAllClick} disabled={!showSearchResult}
                                sx={{width: '100%'}}>{'СБРОСИТЬ'}</Button>
                    </Stack>

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