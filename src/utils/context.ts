import React from "react";
import {FilterItem, Filters, LightPlace, Region, User} from "./types";
import {defaultInitialMapState} from "./constants";

export interface ContextData {
    appMode: string,
    genres: FilterItem[],
    types: FilterItem[][],
    places: LightPlace[],
    addPlace: (p:LightPlace)=> void,
    cultureStatuses: FilterItem[],
    statuses: string[],
    regions: Region[],
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
    setMapState: (state: {center:number[], zoom:number})=>void;
    renewMapState: (center: number[], zoom: number)=>void,
    renewStatusFilters: (filters: string[])=>void,
    user: User | null,
    setUser: (user: User | null) => void,
    refreshPoints: () => void
}

export const GRingContext = React.createContext<ContextData>(
    {
        appMode: 'map',
        genres: [],
        types: [],
        places: [],
        addPlace: (p:LightPlace)=> {},
        cultureStatuses: [],
        statuses: [],
        regions: [],
        scoreRange: [0,5],
        setAppMode: s => {},
        counter: 0,
        setCounter: s => {},
        setScoreRange: n=>{},
        globalFilter: {cultureStatuses:[], statuses: [], statusAll: false, initialized: false},
        setGlobalFilter: f=>{},
        mapState: defaultInitialMapState,
        setMapState: (state: {center: number[], zoom: number})=>{},
        renewMapState: (center: number[], zoom: number)=>{},
        renewStatusFilters: (filters: string[])=>{},
        user: null,
        setUser: (user: User | null)=>{},
        refreshPoints: () => {}
    })