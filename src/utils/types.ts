export interface FilterItem {
    name: string,
    displayName: string
}

export interface Filters {
    genres: string[],
    types: string[],
    cultureStatuses: string[]
}

export interface InitialData {
    genres: FilterItem[],
    types: FilterItem[],
    cultureStatuses: FilterItem[],
    linkPrefixes: string[],
    places: LightPlace[]
}

export interface LightPlace {
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
    latlon: string,
    name: string,
    appeal: number,
    date: string,
    address: string,
    dateAdded: string,
    description: string,
    genres: string[],
    types: string[],
    architects: string[],
    pages: string[],
    cultureStatus: string,
}

export const emptyPlace: FullPlace = {
    latlon:"",
    name:"",
    appeal:1,
    date:"",
    address:"",
    dateAdded:"",
    description:"",
    genres:[],
    types:[],
    architects:[],
    pages:[],
    cultureStatus:""
}