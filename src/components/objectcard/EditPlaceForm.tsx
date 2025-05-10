import React, {useContext, useState} from 'react';
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {PlaceForEdit} from "../../utils/types";
import {GRingContext} from "../../utils/context";
import {saveEdited} from "../../fetchers/fetchers";

interface Props {
    place: PlaceForEdit,
    setPlace: (place: PlaceForEdit | null) => void
    switchMode: () => void,
    refreshPlace: () => void
}

function EditTextField(props: {
    value: string,
    label: string,
    onChange?: ((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void) | undefined
}) {
    return (<TextField variant="outlined" size="small" sx={{marginBottom: 2, width: "100%"}}
                       onChange={props.onChange} value={props.value || ''} label={props.label}
    />);
}

const EditPlaceForm = ({place, setPlace, switchMode, refreshPlace}: Props) => {
    const {statuses} = useContext(GRingContext)
    const [localPlace, setLocalPlace] = useState<PlaceForEdit>({
        ...place,
        typesAsString: place.types.join(', '),
        genresAsString: place.genres.join(', '),
        architectsAsString: place.architects.join(', '),
        pagesAsString: place.pages.join(', '),
    })

    return (
        <Stack width={"auto"} height={"100%"} p={2}>

            <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography marginBottom={2}>
                    {localPlace.id}
                </Typography>
                <span>
                    <Button onClick={() => switchMode()}>ВЕРНУТЬСЯ</Button>
                    <Button onClick={() => {
                        saveEdited(localPlace, ()=> {
                            switchMode()
                            refreshPlace()
                        })
                    }}
                    >СОХРАНИТЬ</Button>
                        </span>
            </Stack>

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

            <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                <EditTextField value={localPlace.latlon} label='Координаты'
                               onChange={(event) => setLocalPlace({...localPlace, latlon: event.target.value})}/>
                <EditTextField value={localPlace.visibility} label='Визибилити'
                               onChange={(event) => setLocalPlace({...localPlace, visibility: event.target.value})}/>
            </Stack>

            <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                <EditTextField value={localPlace.date} label='Дата'
                               onChange={(event) => setLocalPlace({...localPlace, date: event.target.value})}/>
                <EditTextField value={localPlace.appeal.toString()} label='Рейтинг'
                               onChange={(event) => setLocalPlace({...localPlace, appeal: parseFloat(event.target.value)})}/>
                <EditTextField value={localPlace.pics.toString()} label='Картинок'
                               onChange={(event) => setLocalPlace({...localPlace, pics: parseInt(event.target.value)})}/>
            </Stack>

            <EditTextField value={localPlace.name} label='Название'
                           onChange={(event) => setLocalPlace({...localPlace, name: event.target.value})}/>

            <EditTextField value={localPlace.description} label='Описание'
                           onChange={(event) => setLocalPlace({...localPlace, description: event.target.value})}/>

            <EditTextField value={localPlace.typesAsString || ''} label='Типы'
                           onChange={(event) =>
                               setLocalPlace({...localPlace, typesAsString: event.target.value})}/>

            <EditTextField value={localPlace.genresAsString || ''} label='Стили'
                           onChange={(event) => setLocalPlace({...localPlace, genresAsString: event.target.value})}/>

            <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                <EditTextField value={localPlace.cultureStatus} label='Культурный статус'
                               onChange={(event) => setLocalPlace({...localPlace, cultureStatus: event.target.value})}/>
                <EditTextField value={localPlace.monument} label='Монумент'
                               onChange={(event) => setLocalPlace({...localPlace, monument: event.target.value})}/>
            </Stack>

            <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                <EditTextField value={localPlace.country} label='Страна'
                               onChange={(event) => setLocalPlace({...localPlace, country: event.target.value})}/>
                <EditTextField value={localPlace.region} label='Регион'
                               onChange={(event) => setLocalPlace({...localPlace, region: event.target.value})}/>
                <EditTextField value={localPlace.section} label='Район'
                               onChange={(event) => setLocalPlace({...localPlace, section: event.target.value})}/>
                <EditTextField value={localPlace.addString} label='Адрес'
                               onChange={(event) => setLocalPlace({...localPlace, addString: event.target.value})}/>
            </Stack>

            <EditTextField value={localPlace.architectsAsString || ''} label='Архитекторы'
                           onChange={(event) => setLocalPlace({...localPlace, architectsAsString: event.target.value})}/>

            <EditTextField value={localPlace.pagesAsString || ''} label='Сайты'
                           onChange={(event) => setLocalPlace({...localPlace, pagesAsString: event.target.value})}/>

        </Stack>
    );
};

export default EditPlaceForm;