import React from "react";
import {FilterItem, Filters, LightPlace} from "./types";
import {defaultInitialMapState} from "./constants";

export interface ContextData {
    appMode: string,
    genres: FilterItem[],
    types: FilterItem[],
    places: LightPlace[],
    cultureStatuses: FilterItem[],
    statuses: string[],
    linkPrefixes: string[],
    scoreRange: number[],
    setScoreRange: (value: number[]) => void,
    setAppMode: (s: string)=>void,
    globalFilter: Filters,
    setGlobalFilter: (filters: Filters)=>void,
    filtered: boolean,
    mapState: {
        center: number[],
        zoom: number
    },
    renewMapState: (center: number[], zoom: number)=>void,
    renewStatusFilters: (filters: string[])=>void,
    searchResult: {show: boolean, found: string[]},
    setSearchResult: (searchResult: {show: boolean, found: string[]}) => void

}

export const GRingContext = React.createContext<ContextData>(
    {
        appMode: 'map',
        genres: [],
        types: [],
        places: [],
        cultureStatuses: [],
        statuses: [],
        linkPrefixes: [],
        scoreRange: [0,5],
        setAppMode: s => {},
        setScoreRange: n=>{},
        globalFilter: {cultureStatuses:[], statuses: [], statusAll: false, initialized: false},
        setGlobalFilter: f=>{},
        filtered: false,
        mapState: defaultInitialMapState,
        renewMapState: (center: number[], zoom: number)=>{},
        renewStatusFilters: (filters: string[])=>{},
        searchResult: {show: false, found: []},
        setSearchResult: (searchResult: {show: boolean, found: string[]}) => {}

    })