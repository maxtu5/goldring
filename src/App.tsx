import {Box} from "@mui/material";
import NavBar from "./components/top/NavBar";
import MainArea from "./components/top/MainArea";
import {GRingContext} from "./utils/context";
import React, {useEffect, useState} from "react";
import {base_url, defaultInitialMapState, expiry_time, url_getinitial} from "./utils/constants";
import {FilterItem, Filters, InitialData, LightPlace} from "./utils/types";

function App() {
    const [appMode, setAppMode] = useState('map')
    const [counter, setCounter] = useState(0);
    const [scoreRange, setScoreRange] = React.useState<number[]>([1, 5])
    const [filter, setFilter] = React.useState<Filters>({cultureStatuses: [], statuses: [], initialized: false, statusAll: false})
    const [filtered, setFiltered] = React.useState<boolean>(true)
    const [initialData, setInitialData] = useState<InitialData>({
        genres: [], types: [], cultureStatuses: [], places: [], linkPrefixes: [], statuses: [], regions: []
    });
    const [initialMapState, setInitialMapState] = useState(defaultInitialMapState);
    const [initialStatusFilters, setInitialStatusFilters] = useState([]);

    useEffect(()=> {
        setFilter({...filter, statuses: initialStatusFilters.length===0 ? initialData.statuses : initialStatusFilters});
    }, [initialStatusFilters, initialData]);

    useEffect(() => {
        console.log("load app")
        const mapStateFromCache = localStorage.getItem("initialMapState")
        console.log(mapStateFromCache)
        setInitialMapState(mapStateFromCache ? JSON.parse(mapStateFromCache) : defaultInitialMapState)

        const statusFiltersFromCache = localStorage.getItem("initialStatusFilters")
        setInitialStatusFilters(statusFiltersFromCache===null ? [] : JSON.parse(statusFiltersFromCache))

        const fromCache = sessionStorage.getItem("initialData") ?
            JSON.parse(sessionStorage.getItem("initialData")!) : null;

        if (fromCache && (Date.now() - fromCache.time) < expiry_time) {
            console.log("from cache")
            setInitialData(fromCache.payload)
            setFilter({...filter, statuses: fromCache.payload.statuses})
        } else {
            fetch(`${base_url}${url_getinitial}`)
                .then(response => response.json())
                .then(data => {
                    processInitialData(data)
                })
                .catch(error => {
                    console.log(error)
                    processInitialData(null)
                })
        }
        console.log("end load app")
    }, [])

    function processInitialData(data: any) {
        console.log("from api")
        setInitialData({
            genres: {...data.genres},
            // @ts-ignore
            types: [...data.types.map(ta=>{return {...ta}})],
            cultureStatuses: {...data.cultureStatuses}, places: [...data.lightPlaces],
            linkPrefixes: [...data.linkPrefixes], statuses: [...data.statuses], regions: [...data.regions]
        });
        const info = {
            payload: {
                genres: {...data.genres}, types: {...data.types},
                cultureStatuses: {...data.cultureStatuses},
                places: [...data.lightPlaces],
                linkPrefixes: [...data.linkPrefixes]
            },
            time: Date.now()
        }
        console.log("initial data", initialData.types)
        sessionStorage.setItem("initialData", JSON.stringify(info))
    }

    function transformFilter(filterList: FilterItem[]) {
        return Object.getOwnPropertyNames(filterList)
            .map(pname => { // @ts-ignore
                return {displayName: pname, name: filterList[pname]}
            });
    }

    function applyFilter(p: LightPlace): boolean {
        return (p.rating === 0 || (p.rating.valueOf() <= scoreRange[1]) && (p.rating.valueOf() >= scoreRange[0])) &&
            (!filtered ? true : (p.status===null || filter.statuses && filter.statuses.includes(p.status)))
    }

    function saveMapState(center: number[], zoom: number) {
        console.log("saveMapState", center, zoom)
        localStorage.setItem("initialMapState", JSON.stringify({center: center, zoom: zoom}))
    }

    function saveStatusFilters(filters: string[]) {
        localStorage.setItem("initialStatusFilters", JSON.stringify(filters))
    }

    return (
        <Box>
            <GRingContext.Provider value={{
                appMode: appMode, setAppMode: setAppMode,
                counter: counter, setCounter: setCounter,
                genres: transformFilter(initialData.genres),
                types: initialData.types.map(tt=> transformFilter(tt)),
                statuses: initialData.statuses,
                cultureStatuses: transformFilter(initialData.cultureStatuses),
                regions: initialData.regions,
                places: initialData.places
                    .filter(p => applyFilter(p)),
                scoreRange: scoreRange,
                setScoreRange: setScoreRange,
                globalFilter: filter,
                setGlobalFilter: setFilter,
                mapState: initialMapState,
                renewMapState: saveMapState,
                renewStatusFilters: saveStatusFilters
            }}>
                <NavBar/>
                <MainArea/>
            </GRingContext.Provider>
        </Box>
    );
}

export default App;
