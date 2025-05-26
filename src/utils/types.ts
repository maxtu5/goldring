export enum ListParamTypes {NONE, GENRES, TYPES}

export interface FilterItem {
    displayName: string,
    name: string
}

export interface Filters {
    cultureStatuses: string[],
    statuses: string[],
    statusAll:boolean,
    initialized: boolean
}

export interface SearchRequest {
    "name": string,
    "nameExactly": boolean,
    "address": string,
    types: string[],
    genres: string[],
    "statuses": string[],
    "architect": string,
    "architectExactly": boolean
}

export interface InitialData {
    genres: FilterItem[],
    types: FilterItem[][],
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

export interface PlaceForEdit {
    id: string,
    latlon: string,
    status: string,
    visibility: string,
    country: string,
    regionCode: string,
    addString: string,
    appeal: number,
    appealAsString?: string,
    name: string,
    monument: string,
    cultureStatus: string,
    date: string,
    description: string,
    genres: string[],
    genresAsString?: string,
    types: string[],
    typesAsString?: string,
    architects: string[],
    architectsAsString?: string,
    pages: string[],
    pagesAsString?: string,
    dateAdded: string,
    dateModified: string,
    pics: number,
    picsAsString?: string
}

export const emptyPlace: FullPlace = {
    id: "",
    latlon: "",
    name: "",
    appeal: 1,
    date: "",
    address: "",
    dateAdded: "",
    description: "",
    genres: [],
    types: [],
    architects: "",
    pages: [],
    cultureStatus: "",
    pics: [],
    bigLines: [],
    smallLine: ""
}