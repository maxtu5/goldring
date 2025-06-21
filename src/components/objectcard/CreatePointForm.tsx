import {
    Box,
    Button, Checkbox,
    FormControl,
    FormControlLabel, InputLabel, ListItemText, MenuItem, OutlinedInput,
    Radio,
    RadioGroup, Select, SelectChangeEvent,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import React, {useContext, useState} from "react";
import {GRingContext} from "../../utils/context";
import {PlaceForEdit} from "../../utils/types";

function EditTextField(props: {
    value: string,
    label: string,
    onChange?: ((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void) | undefined
}) {
    return (<TextField variant="outlined" size="small" sx={{marginBottom: 2, width: "100%"}}
                       onChange={props.onChange} value={props.value || ''} label={props.label}
    />);
}

export function CreatePointForm() {
    const {setAppMode, statuses, cultureStatuses, types, genres, regions} = useContext(GRingContext)
    const [localPlace, setLocalPlace] = useState<PlaceForEdit>({
        id: '',
        latlon: '',
        name: '',
        appeal: 0,
        date: '',
        dateAdded: '',
        description: '',
        genres: [],
        types: [],
        architects: [],
        pages: [],
        cultureStatus: 'NONE',
        typesAsString: '',
        genresAsString: '',
        architectsAsString: '',
        pagesAsString: '',
        appealAsString: '',
        picsAsString: '',
        pics: 0,
        status: 'TODO',
        visibility: 'ADMIN',
        country: 'RUSSIA',
        regionCode: '',
        addString: '',
        monument: '',
        dateModified: '',
    })

    const handleChangeType = (event: SelectChangeEvent<typeof localPlace.types>) => {
        const {
            target: {value},
        } = event;
        setLocalPlace({...localPlace, types: typeof value === 'string' ? [value] : [...value]});
    };

    return (
        <Box>
            <Stack width={"auto"} height={"100%"} p={2}>

                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography marginBottom={2}>
                        {localPlace.id}
                    </Typography>
                    <span>
                    <Button onClick={() => setAppMode('map')}>ВЕРНУТЬСЯ</Button>
                    <Button onClick={() => {
                        // saveEdited(localPlace, () => {
                        //     // refreshPlace()
                        //     setAppMode('map')
                        // })
                        setAppMode('map')
                    }}
                    >СОХРАНИТЬ</Button>
                        </span>
                </Stack>

                <EditTextField value={localPlace.latlon} label='latlon'
                               onChange={(event) => setLocalPlace({...localPlace, latlon: event.target.value})}/>

                <FormControl>
                    <RadioGroup value={localPlace.status}
                                onChange={(event) => setLocalPlace({...localPlace, status: event.target.value})}
                    >
                        <Box sx={{marginBottom: 2}}>
                            {statuses.map(status => (
                                <FormControlLabel value={status} control={<Radio size={'small'}/>}
                                                  label={<Typography variant={'caption'}>{status}</Typography>}/>
                            ))}
                        </Box>
                    </RadioGroup>
                </FormControl>

                <EditTextField value={localPlace.visibility} label='visibility'
                               onChange={(event) => setLocalPlace({...localPlace, visibility: event.target.value})}/>

                <EditTextField value={localPlace.country} label='country'
                               onChange={(event) => setLocalPlace({...localPlace, country: event.target.value})}/>


                <Select size={'small'} sx={{marginBottom: 2}} displayEmpty={true}
                        value={localPlace.regionCode}
                        onChange={(event) =>
                            setLocalPlace({...localPlace, regionCode: event.target.value})}
                        renderValue={(selected) => selected === '' ? 'regionCode' : selected}
                >
                    {regions.flatMap(region =>
                        region.districts.flatMap((district, index) =>
                            district.codes.map(code =>
                                <MenuItem key={code} value={code} divider={index===region.districts.length-1}>
                                    <Checkbox sx={{p: 0}} checked={localPlace.regionCode === code}/>
                                    <ListItemText primary={code}/>
                                </MenuItem>)))
                    }
                </Select>

                {/*<EditTextField value={localPlace.regionCode} label='regionCode'*/}
                {/*               onChange={(event) => setLocalPlace({...localPlace, regionCode: event.target.value})}/>*/}

                <EditTextField value={localPlace.addString} label='addString'
                               onChange={(event) => setLocalPlace({...localPlace, addString: event.target.value})}/>

                <EditTextField value={localPlace.appealAsString || ''} label='appeal'
                               onChange={(event) => setLocalPlace({
                                   ...localPlace, appealAsString: event.target.value
                               })}/>

                <EditTextField value={localPlace.picsAsString || ''} label='pics'
                               onChange={(event) => setLocalPlace({
                                   ...localPlace, picsAsString: event.target.value
                               })}/>

                <EditTextField value={localPlace.name} label='name'
                               onChange={(event) => setLocalPlace({...localPlace, name: event.target.value})}/>

                <EditTextField value={localPlace.monument} label='monument'
                               onChange={(event) => setLocalPlace({...localPlace, monument: event.target.value})}/>

                <Select
                    value={localPlace.cultureStatus === '' ? 'cultureStatus' : localPlace.cultureStatus}
                    size={'small'}
                    sx={{marginBottom: 2, width: "100%"}}
                    onChange={(event) => {
                        setLocalPlace({...localPlace, cultureStatus: event.target.value})
                    }}
                >
                    <MenuItem value='NONE'>cultureStatus</MenuItem>
                    {cultureStatuses.map(status => (
                        <MenuItem value={status.name}>{status.displayName}</MenuItem>
                    ))}
                </Select>

                <EditTextField value={localPlace.date} label='date'
                               onChange={(event) => setLocalPlace({...localPlace, date: event.target.value})}/>

                <EditTextField value={localPlace.description} label='description'
                               onChange={(event) => setLocalPlace({...localPlace, description: event.target.value})}/>

                <Select multiple size={'small'} sx={{marginBottom: 2}} displayEmpty={true}
                        value={localPlace.genres}
                        onChange={(event) => setLocalPlace({
                            ...localPlace,
                            genres: typeof event.target.value === 'string' ? [event.target.value] : event.target.value
                        })}
                        renderValue={(selected) => selected.length === 0 ? 'Стили' : selected.join(', ')}
                >
                    {genres.map(genre => (
                        <MenuItem key={genre.name} value={genre.name}>
                            <Checkbox sx={{p: 0}} checked={localPlace.genres.includes(genre.name)}/>
                            <ListItemText primary={genre.displayName}/>
                        </MenuItem>
                    ))}
                </Select>

                <FormControl sx={{marginBottom: 2}}>
                    <InputLabel shrink htmlFor="select-types"
                                sx={{backgroundColor: 'white', paddingLeft: 1, paddingRight: 1}}>
                        Типы
                    </InputLabel>
                    <Select multiple size="small"
                            value={localPlace.types}
                            onChange={handleChangeType}
                            renderValue={(selected) => selected.join(', ')}
                    >
                        {types.flatMap((typesGroup, i) => (typesGroup.map((type, index) => (
                                <MenuItem key={type.name} value={type.name} divider={index === typesGroup.length - 1}>
                                    <Checkbox sx={{p: 0}} checked={localPlace.types.includes(type.name)}/>
                                    <ListItemText primary={type.displayName}/>
                                </MenuItem>
                            ))
                        ))}
                    </Select>
                </FormControl>

                {/*<EditTextField value={localPlace.genresAsString || ''} label='genres'*/}
                {/*               onChange={(event) => setLocalPlace({*/}
                {/*                   ...localPlace,*/}
                {/*                   genresAsString: event.target.value*/}
                {/*               })}/>*/}

                {/*<EditTextField value={localPlace.typesAsString || ''} label='types'*/}
                {/*               onChange={(event) =>*/}
                {/*                   setLocalPlace({...localPlace, typesAsString: event.target.value})}/>*/}

                <EditTextField value={localPlace.architectsAsString || ''} label='architects'
                               onChange={(event) => setLocalPlace({
                                   ...localPlace, architectsAsString: event.target.value
                               })}/>

                <EditTextField value={localPlace.pagesAsString || ''} label='pages'
                               onChange={(event) => setLocalPlace({...localPlace, pagesAsString: event.target.value})}/>

            </Stack>

        </Box>
    );
}