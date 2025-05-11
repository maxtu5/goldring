import {Box} from "@mui/material";
import NavBar from "./components/top/NavBar";
import MainArea from "./components/top/MainArea";
import {GRingContext} from "./utils/context";
import React, {useEffect, useState} from "react";
import {base_url, defaultInitialMapState, expiry_time, url_getinitial} from "./utils/constants";
import {FilterItem, Filters, InitialData, LightPlace} from "./utils/types";
import {initialDataLocal} from "./utils/data";


function App() {
    const [displayMode, setDisplayMode] = useState('map')
    const [scoreRange, setScoreRange] = React.useState<number[]>([1, 5])
    const [filter, setFilter] = React.useState<Filters>({cultureStatuses: [], statuses: [], initialized: false, statusAll: false})
    const [filtered, setFiltered] = React.useState<boolean>(true)
    const [searchResult, setSearchResult] = React.useState<{show: boolean, found: string[]}>({show: false, found: []})
    const [initialData, setInitialData] = useState<InitialData>({
        genres: [], types: [], cultureStatuses: [], places: [], linkPrefixes: [], statuses: []
    });
    const [initialMapState, setInitialMapState] = useState(defaultInitialMapState);
    const [initialStatusFilters, setInitialStatusFilters] = useState([]);

    useEffect(()=> {
        setFilter({...filter, statuses: initialStatusFilters.length===0 ? initialData.statuses : initialStatusFilters});

    }, [initialStatusFilters, initialData]);

    function processInitialData(data: any) {
        console.log("from api")
        setInitialData({
            genres: {...data.genres}, types: {...data.types},
            cultureStatuses: {...data.cultureStatuses}, places: [...data.lightPlaces],
            linkPrefixes: [...data.linkPrefixes], statuses: [...data.statuses]
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
        sessionStorage.setItem("initialData", JSON.stringify(info))
    }

    useEffect(() => {
        console.log("load app")
        const mapStateFromCache = localStorage.getItem("initialMapState")
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

    function transformFilter(filterList: FilterItem[]) {
        return Object.getOwnPropertyNames(filterList)
            .map(pname => { // @ts-ignore
                return {name: pname, displayName: filterList[pname]}
            });
    }

    function applyFilter(p: LightPlace): boolean {
        return (p.rating === 0 || (p.rating.valueOf() <= scoreRange[1]) && (p.rating.valueOf() >= scoreRange[0])) &&
            (!filtered ? true :
                // (filter.genres.length === 0 ? true : filter.genres.filter(g => p.genres.filter(gg => g === gg).length > 0).length === filter.genres.length) &&
                // (filter.types.length === 0 ? true : filter.types.filter(t => p.types.filter(tt => t === tt).length > 0).length === filter.types.length) &&
                (filter.cultureStatuses.length === 0 ? true : (filter.cultureStatuses.indexOf(p.cultureStatus) > -1)) &&
                (filter.statuses.length === 0 ? true : filter.statuses.includes(p.status)))
    }

    function saveMapState(center: number[], zoom: number) {
        console.log("saveMapState", center, zoom)
        localStorage.setItem("initialMapState", JSON.stringify({center: center, zoom: zoom}))
    }

    function saveStatusFilters(filters: string[]) {
        console.log("saveStatusFilters", filters)
        localStorage.setItem("initialStatusFilters", JSON.stringify(filters))
    }

    return (
        <Box>
            <GRingContext.Provider value={{
                appMode: displayMode, setAppMode: setDisplayMode,
                genres: Object.getOwnPropertyNames(initialData.genres)
                    .map(pname => { // @ts-ignore
                        return {name: pname, displayName: initialData.genres[pname]}
                    }),
                types: Object.getOwnPropertyNames(initialData.types)
                    .map(pname => { // @ts-ignore
                        return {name: pname, displayName: initialData.types[pname]}
                    }),
                statuses: initialData.statuses,
                linkPrefixes: [...initialData.linkPrefixes],
                cultureStatuses: transformFilter(initialData.cultureStatuses),
                places: initialData.places
                    .filter(p => searchResult.show ? searchResult.found.includes(p.id) : true)
                    .filter(p => applyFilter(p)),
                scoreRange: scoreRange,
                setScoreRange: setScoreRange,
                globalFilter: filter,
                setGlobalFilter: setFilter,
                filtered: filtered,
                setFiltered: setFiltered,
                mapState: initialMapState,
                renewMapState: saveMapState,
                renewStatusFilters: saveStatusFilters,
                searchResult: searchResult,
                setSearchResult: setSearchResult
            }}>
                <NavBar/>
                <MainArea/>
            </GRingContext.Provider>
        </Box>
    );
}

export default App;
