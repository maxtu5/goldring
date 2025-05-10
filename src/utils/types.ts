export enum ListParamTypes {NONE, GENRES, TYPES}

export interface FilterItem {
    name: string,
    displayName: string
}

export interface Filters {
    cultureStatuses: string[],
    statuses: string[]
}

export interface SearchRequest {
    "name": string,
    "nameExactly" : boolean,
    "address" : string,
    types: string[],
    genres: string[],
    "statuses": string[],
    "architect" : string,
    "architectExactly" : boolean
}

export interface InitialData {
    genres: FilterItem[],
    types: FilterItem[],
    cultureStatuses: FilterItem[],
    statuses: string[],
    linkPrefixes: string[],
    places: LightPlace[]
}

export interface LightPlace {
    id: string,
    latlon: string,
    status: string,
    visibility: string,
    cultureStatus: string,
    rating: number,
    date: string,
    genres: string[],
    types: string[]
}

export interface FullPlace {
    id: string,
    latlon: string,
    name: string,
    appeal: number,
    date: string,
    address: string,
    dateAdded: string,
    description: string,
    genres: string[],
    types: string[],
    architects: string,
    pages: string[],
    cultureStatus: string,
    pics: string[],
    bigLines: string[],
    smallLine: string
}

export const emptyPlace: FullPlace = {
    id:"",
    latlon:"",
    name:"",
    appeal:1,
    date:"",
    address:"",
    dateAdded:"",
    description:"",
    genres:[],
    types:[],
    architects:"",
    pages:[],
    cultureStatus:"",
    pics:[],
    bigLines:[],
    smallLine:""
}