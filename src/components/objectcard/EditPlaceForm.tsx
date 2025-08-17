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
import {savedEditedWithJwt, saveLocal} from "../../fetchers/fetchers";

interface Props {
    place: PlaceForEdit,
    setPlace: (place: PlaceForEdit | null) => void
    saveAndClose: () => void,
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

const EditPlaceForm = ({place, setPlace, saveAndClose}: Props) => {
    const {statuses} = useContext(GRingContext)
    const [localPlace, setLocalPlace] = useState<PlaceForEdit>({
        ...place,
        typesAsString: place.types.join(', '),
        genresAsString: place.genres.join(', '),
        architectsAsString: place.architects.join(', '),
        pagesAsString: place.pages.join(', '),
        appealAsString: place.appeal.toString(),
        picsAsString: place.pics.toString()
    })

    return (
        <Stack width={"auto"} height={"100%"} p={2}>

            <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography marginBottom={2}>
                    {localPlace.id}
                </Typography>
                <span>
                    <Button onClick={() => saveAndClose()}>ВЕРНУТЬСЯ</Button>
                    <Button onClick={() => {
                        savedEditedWithJwt(localPlace, () => {
                            // saveLocal(json)
                            saveAndClose()
                        })
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

            <EditTextField value={localPlace.regionCode} label='regionCode'
                           onChange={(event) => setLocalPlace({...localPlace, regionCode: event.target.value})}/>

            <EditTextField value={localPlace.addString} label='addString'
                           onChange={(event) => setLocalPlace({...localPlace, addString: event.target.value})}/>

            <EditTextField value={localPlace.appealAsString || ''} label='appeal'
                           onChange={(event) => setLocalPlace({
                               ...localPlace, appealAsString: event.target.value})}/>

            <EditTextField value={localPlace.picsAsString || ''} label='pics'
                           onChange={(event) => setLocalPlace({
                               ...localPlace, picsAsString: event.target.value})}/>

            <EditTextField value={localPlace.name} label='name'
                           onChange={(event) => setLocalPlace({...localPlace, name: event.target.value})}/>

            <EditTextField value={localPlace.monument} label='monument'
                           onChange={(event) => setLocalPlace({...localPlace, monument: event.target.value})}/>

            <EditTextField value={localPlace.cultureStatus} label='cultureStatus'
                           onChange={(event) => setLocalPlace({...localPlace, cultureStatus: event.target.value})}/>

            <EditTextField value={localPlace.date} label='date'
                           onChange={(event) => setLocalPlace({...localPlace, date: event.target.value})}/>

            <EditTextField value={localPlace.description} label='description'
                           onChange={(event) => setLocalPlace({...localPlace, description: event.target.value})}/>

            <EditTextField value={localPlace.genresAsString || ''} label='genres'
                           onChange={(event) => setLocalPlace({...localPlace, genresAsString: event.target.value})}/>

            <EditTextField value={localPlace.typesAsString || ''} label='types'
                           onChange={(event) =>
                               setLocalPlace({...localPlace, typesAsString: event.target.value})}/>

            <EditTextField value={localPlace.architectsAsString || ''} label='architects'
                           onChange={(event) => setLocalPlace({
                               ...localPlace, architectsAsString: event.target.value})}/>

            <EditTextField value={localPlace.pagesAsString || ''} label='pages'
                           onChange={(event) => setLocalPlace({...localPlace, pagesAsString: event.target.value})}/>

        </Stack>
    );
};

export default EditPlaceForm;