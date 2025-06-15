import {Checkbox, FormControlLabel, IconButton, Stack, Typography} from "@mui/material";
import React, {useContext} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {GRingContext} from "../../utils/context";
import {SearchRequest} from "../../utils/types";

interface RegionSelectorProps {
    searchRequest: SearchRequest,
    setSearchRequest: (searchRequest: SearchRequest) => void
}

function RegionSelector({searchRequest, setSearchRequest}: RegionSelectorProps) {
    const {regions} = useContext(GRingContext)
    const [expanded, setExpanded] = React.useState<boolean[]>(regions.map(() => false))
    const [selectAll, setSelectAll] = React.useState<boolean[]>(regions.map(() => false))

    function DistrictCheckBox(props: { district: { codes: string[]; name: string } }) {
        return (
            <FormControlLabel
                control={<Checkbox
                    sx={{p: 0}}
                    size={'small'}
                    checked={searchRequest.districts.includes(props.district.codes[0])}
                    onChange={() => handleDistrictCheckBoxToggle(props.district.codes)}
                />}
                label={<Typography variant={'caption'}>{props.district.name}</Typography>}
            />
        );
    }

    function handleDistrictCheckBoxToggle(codes: string[]) {
        setSearchRequest({
            ...searchRequest,
            districts: searchRequest.districts.findIndex(code => codes.includes(code)) >= 0 ?
                searchRequest.districts.filter(code => !codes.includes(code)) :
                [...searchRequest.districts, ...codes]
        })
    }

    return (
        <Stack margin={2}>
            {regions.map((region, index) => (
                <Stack>
                    <Stack direction={'row'} justifyContent={'space-between'} onClick={() => {
                        setExpanded(expanded.map((e, i) => i === index ? !e : e))
                    }}>

                        <Typography>{region.name}</Typography>

                        <IconButton aria-label="delete" >
                            {expanded[index] ? <ExpandMoreIcon/> : <ExpandLessIcon/>}
                        </IconButton>
                    </Stack>
                    <Stack sx={{display: expanded[index] ? 'display-box' : 'none'}}>
                        <FormControlLabel
                            control={<Checkbox
                                sx={{p: 0}}
                                size={'small'}
                                checked={selectAll[index]}
                                onChange={() => {
                                    const addDistricts = selectAll[index] ? [] : (region.districts.flatMap(d=>d.codes))
                                    setSearchRequest({
                                        ...searchRequest,
                                        districts: [...searchRequest.districts.filter(code => region.districts.filter(d=>d.codes.includes(code)).length === 0),
                                            ...addDistricts]
                                    })
                                    setSelectAll(selectAll.map((c, i) => i === index ? !c : c))
                                }}
                            />}
                            sx={{marginBottom: 1}}
                            label={<Typography variant={'caption'}>Все районы</Typography>}
                        />
                        <Stack direction={'row'} justifyContent={'space-between'}>
                            <Stack width={'11vw'} paddingBottom={2}>
                                {region.districts
                                    .slice(0, (region.districts.length + 1) / 2)
                                    .map((district: { codes: string[]; name: string; }) => <DistrictCheckBox
                                        district={district}/>)}
                            </Stack>
                            <Stack width={'11vw'} paddingBottom={2}>
                                {region.districts
                                    .slice((region.districts.length + 1) / 2, region.districts.length)
                                    .map((district: { codes: string[]; name: string; }) => <DistrictCheckBox
                                        district={district}/>)}
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>)
            )}
        </Stack>)
}

export default RegionSelector;