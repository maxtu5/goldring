import {
    Box, Button, Checkbox, FormControl, FormControlLabel, IconButton, Radio, RadioGroup, SelectChangeEvent, Stack,
    TextField, Typography
} from "@mui/material";
import React, {JSX, useContext, useState} from "react";
import {GRingContext} from "../../utils/context";
import {LightPlace, PlaceForEdit} from "../../utils/types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {saveNew} from "../../fetchers/fetchers";
import {latlonStringToNumbers} from "../../utils/utils";

function EditTextField(props: {
    value: string,
    label: string,
    onChange?: ((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void) | undefined
}) {
    return (<TextField variant="outlined" size="small" sx={{marginBottom: 2, width: "100%"}}
                       onChange={props.onChange} value={props.value || ''} label={props.label}
    />);
}

function ListOpener(props: {
    expanded: boolean,
    setExpanded: () => void,
    label: JSX.Element
}) {
    return (
        <Stack direction={'row'}>
            <IconButton onClick={props.setExpanded}>
                {props.expanded ? <ExpandMoreIcon/> : <ExpandLessIcon/>}
            </IconButton>
            {props.label}
        </Stack>
    );
}

function SelectItem(props: { changeHandler: () => void, checked: boolean, label: string, itemWidth: string }) {
    return (<FormControlLabel sx={{width: props.itemWidth}}
                              control={<Checkbox size={'small'} sx={{p: 0, marginRight: 0}} checked={props.checked}
                                                 onChange={props.changeHandler}/>}
                              label={<Typography variant={'caption'}>{props.label}</Typography>}/>)
}

export function CreatePointForm() {
    const {
        setAppMode,
        statuses,
        cultureStatuses,
        types,
        genres,
        regions,
        setMapState,
        addPlace
    } = useContext(GRingContext)
    const [regionCodeExpanded, setRegionCodeExpanded] = useState(false)
    const [regionsExpanded, setRegionsExpanded] = React.useState<boolean[]>(regions.map(() => false))
    const [cultureStatusExpanded, setCultureStatusExpanded] = useState(false)
    const [genresExpanded, setGenresExpanded] = useState(false)
    const [typesExpanded, setTypesExpanded] = useState(false)

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
        cultureStatus: '',
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
                        saveNew(localPlace, (newPlace: LightPlace) => {
                            addPlace(newPlace)
                            setMapState({center: latlonStringToNumbers(localPlace.latlon), zoom: 18})
                            setAppMode('map')
                        })
                    }}
                    >СОХРАНИТЬ</Button>
                        </span>
                </Stack>

                <EditTextField value={localPlace.latlon} label='latlon'
                               onChange={(event) =>
                                   setLocalPlace({...localPlace, latlon: event.target.value})}/>

                <FormControl>
                    <RadioGroup value={localPlace.status}
                                onChange={(event) =>
                                    setLocalPlace({...localPlace, status: event.target.value})}>
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

                <Stack sx={{marginBottom: 2}}>
                    <ListOpener expanded={regionCodeExpanded}
                                setExpanded={() => setRegionCodeExpanded(!regionCodeExpanded)}
                                label={<TextField sx={{width: '100%', paddingLeft: 1}} size={'small'}
                                                  value={localPlace.regionCode === '' ? 'regionCode' : localPlace.regionCode}/>}/>
                    {regionCodeExpanded && (regions.map((region, index) => (
                        <Stack>
                            <ListOpener
                                expanded={regionsExpanded[index]}
                                setExpanded={() => setRegionsExpanded(regionsExpanded.map((e, i) => i === index ? !e : e))}
                                label={<Typography variant={'subtitle1'} paddingTop={0.9}>{region.name}</Typography>}/>
                            <Box paddingLeft={6}>
                                {regionsExpanded[index] && region.districtsMap.map(district => (
                                    <SelectItem itemWidth={'20vw'}
                                                checked={localPlace.regionCode === district.displayName}
                                                changeHandler={() => {
                                                    setLocalPlace({
                                                        ...localPlace,
                                                        regionCode: localPlace.regionCode === district.displayName ? '' : district.displayName
                                                    })
                                                }}
                                                label={district.name}
                                    />
                                ))
                                }
                            </Box>
                        </Stack>
                    )))}
                </Stack>

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

                <Stack sx={{marginBottom: 1}}>
                    <ListOpener expanded={cultureStatusExpanded}
                                setExpanded={() => setCultureStatusExpanded(!cultureStatusExpanded)}
                                label={<TextField sx={{width: '100%', paddingLeft: 1}} size={'small'}
                                                  value={localPlace.cultureStatus === '' ? 'cultureStatus' : localPlace.cultureStatus}/>}/>
                    <Box marginLeft={6} marginTop={1}>
                        {cultureStatusExpanded && (cultureStatuses.map((status, index) => (
                            <SelectItem itemWidth={'40vw'}
                                        checked={localPlace.cultureStatus === status.name}
                                        changeHandler={() => {
                                            setLocalPlace({
                                                ...localPlace,
                                                cultureStatus: localPlace.cultureStatus === status.name ? '' : status.name
                                            })
                                        }}
                                        label={status.displayName}
                            />
                        )))}
                    </Box>
                </Stack>

                <EditTextField value={localPlace.date} label='date'
                               onChange={(event) => setLocalPlace({...localPlace, date: event.target.value})}/>

                <EditTextField value={localPlace.description} label='description'
                               onChange={(event) => setLocalPlace({...localPlace, description: event.target.value})}/>

                <Stack sx={{marginBottom: 1}}>
                    <ListOpener expanded={genresExpanded}
                                setExpanded={() => setGenresExpanded(!genresExpanded)}
                                label={<TextField sx={{width: '100%', paddingLeft: 1}} size={'small'}
                                                  value={localPlace.genres.length === 0 ? 'genres' : localPlace.genres.join(', ')}/>}/>
                    <Box marginLeft={6} marginTop={1}>
                        {genresExpanded && (genres.map((genre, index) => (
                            <SelectItem itemWidth={'20vw'}
                                        checked={localPlace.genres.includes(genre.name)}
                                        changeHandler={() => {
                                            setLocalPlace({
                                                ...localPlace,
                                                genres: localPlace.genres.includes(genre.name) ? localPlace.genres.filter(g => g !== genre.name) : [...localPlace.genres, genre.name]
                                            })
                                        }}
                                        label={genre.displayName}
                            />
                        )))}
                    </Box>
                </Stack>

                <Stack sx={{marginBottom: 2}}>
                    <ListOpener expanded={typesExpanded}
                                setExpanded={() => setTypesExpanded(!typesExpanded)}
                                label={<TextField sx={{width: '100%', paddingLeft: 1}} size={'small'}
                                                  value={localPlace.types.length === 0 ? 'types' : localPlace.types.join(', ')}/>}/>
                    {typesExpanded && (types.map((typeGroup) => (
                        <Box marginLeft={6} marginTop={2}>
                            {typeGroup.map((type, index) => (
                                <SelectItem itemWidth={'20vw'}
                                            checked={localPlace.types.includes(type.name)}
                                            changeHandler={() => {
                                                setLocalPlace({
                                                    ...localPlace,
                                                    types: localPlace.types.includes(type.name) ? localPlace.types.filter(g => g !== type.name) : [...localPlace.types, type.name]
                                                })
                                            }}
                                            label={type.displayName}
                                />
                            ))}
                        </Box>
                    )))}
                </Stack>

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