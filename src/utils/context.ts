import React from "react";
import {FilterItem, Filters, LightPlace} from "./types";

export interface ContextData {
    appMode: string,
    genres: FilterItem[],
    types: FilterItem[],
    places: LightPlace[],
    cultureStatuses: FilterItem[],
    linkPrefixes: string[],
    scoreRange: number[],
    setScoreRange: (value: number[]) => void,
    setAppMode: (s: string)=>void,
    globalFilter: Filters,
    setGlobalFilter: (filters: Filters)=>void,
    filtered: boolean,
    setFiltered: (b: boolean) => void
}

export const GRingContext = React.createContext<ContextData>(
    {
        appMode: 'map',
        genres: [],
        types: [],
        places: [],
        cultureStatuses: [],
        linkPrefixes: [],
        scoreRange: [0,5],
        setAppMode: s => {},
        setScoreRange: n=>{},
        globalFilter: {genres: [], types: [], cultureStatuses:[]},
        setGlobalFilter: f=>{},
        filtered: false,
        setFiltered: (b) =>{}
    })