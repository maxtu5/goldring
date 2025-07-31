import {Box} from "@mui/material";
import NavBar from "./components/top/NavBar";
import MainArea from "./components/top/MainArea";
import {GRingContext} from "./utils/context";
import React, {useEffect, useState} from "react";
import {anonymousUser, base_url, defaultInitialMapState, expiry_time, url_getinitial} from "./utils/constants";
import {FilterItem, Filters, InitialData, LightPlace, User} from "./utils/types";
import {currentUser} from "./fetchers/userdata";
import {loadInitialData} from "./fetchers/fetchers";

function App() {
    const [appMode, setAppMode] = useState('map')
    const [user, setUser] = useState<User | null>(null);
    const [counter, setCounter] = useState(0);
    const [scoreRange, setScoreRange] = React.useState<number[]>([1, 5])
    const [filter, setFilter] = React.useState<Filters>({
        cultureStatuses: [],
        statuses: [],
        initialized: false,
        statusAll: false
    })
    const [filtered, setFiltered] = React.useState<boolean>(true)
    const [initialData, setInitialData] = useState<InitialData>({
        genres: [], types: [], cultureStatuses: [], places: [], linkPrefixes: [], statuses: [], regions: []
    });
    const [initialMapState, setInitialMapState] = useState(defaultInitialMapState);
    const [initialStatusFilters, setInitialStatusFilters] = useState([]);

    useEffect(() => {
        setFilter({
            ...filter,
            statuses: initialStatusFilters.length === 0 ? initialData.statuses : initialStatusFilters
        });
    }, [initialStatusFilters, initialData]);

    useEffect(() => {
        console.log("load app")

        currentUser((u: User | null) => {
            setUser(u == null || u.name === anonymousUser ? null : u)
        })

        const mapStateFromCache = localStorage.getItem("initialMapState")
        console.log(mapStateFromCache)
        setInitialMapState(mapStateFromCache ? JSON.parse(mapStateFromCache) : defaultInitialMapState)

        const statusFiltersFromCache = localStorage.getItem("initialStatusFilters")
        setInitialStatusFilters(statusFiltersFromCache === null ? [] : JSON.parse(statusFiltersFromCache))

        const fromCache = sessionStorage.getItem("initialData") ?
            JSON.parse(sessionStorage.getItem("initialData")!) : null;

        if (fromCache && (Date.now() - fromCache.time) < expiry_time) {
            console.log("from cache")
            setInitialData(fromCache.payload)
            setFilter({...filter, statuses: fromCache.payload.statuses})
        } else {
            loadInitialData(processInitialData).then(()=>{console.log("end load app")})
        }

    }, [])

    function processInitialData(data: any) {
        console.log("from api")
        setInitialData({
            genres: {...data.genres},
            // @ts-ignore
            types: [...data.types.map(ta => {return {...ta}})],
            cultureStatuses: {...data.cultureStatuses}, places: [...data.lightPlaces],
            linkPrefixes: [...data.linkPrefixes], statuses: [...data.statuses],
            regions: [...data.regions]
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

    function transformFilter(filterList: FilterItem[]) {
        return Object.getOwnPropertyNames(filterList)
            .map(pname => { // @ts-ignore
                return {displayName: pname, name: filterList[pname]}
            });
    }

    function applyFilter(p: LightPlace): boolean {
        return (p.rating === 0 || (p.rating.valueOf() <= scoreRange[1]) && (p.rating.valueOf() >= scoreRange[0])) &&
            (!filtered ? true : (p.status === null || filter.statuses && filter.statuses.includes(p.status)))
    }

    function saveMapState(center: number[], zoom: number) {
        localStorage.setItem("initialMapState", JSON.stringify({center: center, zoom: zoom}))
    }

    function saveStatusFilters(filters: string[]) {
        localStorage.setItem("initialStatusFilters", JSON.stringify(filters))
    }

    function addPlace(p: LightPlace) {
        setInitialData({...initialData, places: [...initialData.places, p]})
    }

    return (
        <Box>
            <GRingContext.Provider value={{
                appMode: appMode, setAppMode: setAppMode,
                counter: counter, setCounter: setCounter,
                genres: transformFilter(initialData.genres),
                types: initialData.types.map(tt => transformFilter(tt)),
                statuses: initialData.statuses,
                cultureStatuses: transformFilter(initialData.cultureStatuses),
                regions: initialData.regions.map(reg => {
                    return {...reg, districtsMap: transformFilter(reg.districtsMap)}
                }),
                places: initialData.places
                    .filter(p => applyFilter(p)),
                addPlace: addPlace,
                scoreRange: scoreRange,
                setScoreRange: setScoreRange,
                globalFilter: filter,
                setGlobalFilter: setFilter,
                mapState: initialMapState,
                setMapState: setInitialMapState,
                renewMapState: saveMapState,
                renewStatusFilters: saveStatusFilters,
                user: user,
                setUser: setUser,
                refreshPoints: ()=>{loadInitialData((data: any) =>
                    processInitialData(data))}
            }}>
                <NavBar/>
                <MainArea/>
            </GRingContext.Provider>
        </Box>
    );
}

export default App;
