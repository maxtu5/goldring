import React from 'react';
import {
    Box,
    Button,
    Checkbox,
    ListItemText,
    MenuItem,
    Select,
    SelectChangeEvent,
    Slider,
    Stack,
    styled,
    Switch,
    Typography
} from "@mui/material";
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";


const SideBar = () => {
    const [scoreRange, setScoreRange] = React.useState<number[]>([4, 5]);
    const [genres, setGenres] = React.useState<string[]>([]);
    const [types, setTypes] = React.useState<string[]>([]);


    const Subheader = styled(Typography)(({theme}) => ({
            variant: "h6",
            paddingTop: 10
        })
    )

    const handleChangeScore = (event: Event, newValue: number | number[]) => {
        setScoreRange(newValue as number[]);
    };

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const handleChangeGenre = (event: SelectChangeEvent<typeof genres>) => {
        const {
            target: {value},
        } = event;
        setGenres(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChangeType = (event: SelectChangeEvent<typeof types>) => {
        const {
            target: {value},
        } = event;
        setTypes(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const genreNames = [
        'Хороший жанр',
        'Плохой жанр',
        'Страшный жанр',
        'Невероятный жанр',
        'Отвал башки'
    ];
    const typeNames = [
        'Храм',
        'Жилой дом',
        'Инженерное сооружение',
        'Производственное здание',
        'Учреждение'
    ];
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

    return (
        <Box flex={1} p={2}>
            <Stack>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography variant={"h6"}>
                        ФИЛЬТРЫ
                    </Typography>
                    <Button>Показать на карте</Button>
                </Stack>

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
                    Время постройки
                </Subheader>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack direction={"row"} spacing={2}>
                        <DatePicker minDate={dayjs('1012-01-01', 'YYYY-MM-DD')} label={'от'} views={['year']}
                                    openTo='year'/>
                        <DatePicker minDate={dayjs('1012-01-01', 'YYYY-MM-DD')} label={'до'} views={['year']}
                                    openTo='year'/>
                    </Stack>
                </LocalizationProvider>
                <Subheader>
                    Жанр
                </Subheader>
                <Select
                    id="demo-multiple-checkbox"
                    multiple
                    value={genres}
                    onChange={handleChangeGenre}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {genreNames.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={genres.includes(name)}/>
                            <ListItemText primary={name}/>
                        </MenuItem>
                    ))}
                </Select>
                <Subheader>
                    Тип
                </Subheader>
                <Select
                    id="demo-multiple-checkbox"
                    multiple
                    value={types}
                    onChange={handleChangeType}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {typeNames.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={types.includes(name)}/>
                            <ListItemText primary={name}/>
                        </MenuItem>
                    ))}
                </Select>

                <Subheader>Уже видел</Subheader>
                <Switch defaultChecked/>

                <Subheader>Не хочу</Subheader>
                <Switch defaultChecked/>


            </Stack>
        </Box>
    );
};

export default SideBar;