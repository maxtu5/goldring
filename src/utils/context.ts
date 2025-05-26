import React from "react";
import {FilterItem, Filters, LightPlace} from "./types";
import {defaultInitialMapState} from "./constants";

export interface ContextData {
    appMode: string,
    genres: FilterItem[],
    types: FilterItem[][],
    places: LightPlace[],
    cultureStatuses: FilterItem[],
    statuses: string[],
    scoreRange: number[],
    setScoreRange: (value: number[]) => void,
    setAppMode: (s: string)=>void,
    counter: number,
    setCounter: (value: number) => void,
    globalFilter: Filters,
    setGlobalFilter: (filters: Filters)=>void,
    mapState: {
        center: number[],
        zoom: number
    },
    renewMapState: (center: number[], zoom: number)=>void,
    renewStatusFilters: (filters: string[])=>void
}

export const GRingContext = React.createContext<ContextData>(
    {
        appMode: 'map',
        genres: [],
        types: [],
        places: [],
        cultureStatuses: [],
        statuses: [],
        scoreRange: [0,5],
        setAppMode: s => {},
        counter: 0,
        setCounter: s => {},
        setScoreRange: n=>{},
        globalFilter: {cultureStatuses:[], statuses: [], statusAll: false, initialized: false},
        setGlobalFilter: f=>{},
        mapState: defaultInitialMapState,
        renewMapState: (center: number[], zoom: number)=>{},
        renewStatusFilters: (filters: string[])=>{}
    })