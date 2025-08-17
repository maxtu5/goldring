import React, {useContext, useState} from 'react';
import {Button, Stack} from "@mui/material";
import {GRingContext} from "../../utils/context";
import {loadStats} from "../../fetchers/fetchers";

const StatsPanel = () => {
    const {setAppMode} = useContext(GRingContext)
    const [stats, setStats] = useState<string>('')

    if (stats.length === 0) loadStats(setStats)
    return (
        <Stack>
            <Button onClick={()=>setAppMode('map')}>НАЗАД</Button>
            {stats}
        </Stack>
    );
};

export default StatsPanel;