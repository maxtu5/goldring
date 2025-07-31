import {SearchRequest} from "./types";

export const base_url = 'https://localhost:8080'

export const url_getinitial = '/main'
export const url_getPlaceDisplay = '/load-point?id='
export const url_search = '/search'

export const url_getPlaceEdit = '/load?id='
export const url_savePlaceEdit = '/edit'
export const url_savePlaceNew = '/new'

export const url_users_signin = '/users/signin'
export const url_users_signup = '/users/signup'
export const url_users_current = '/users/current'
export const url_users_signout = '/users/signout'

export const url_imageprefix = 'http://127.0.0.1:8081/'

export const expiry_time = 1000

export const defaultInitialMapState =
    {center: [55.7283, 37.5569], zoom: 7}

export const exactlySuffix = 'Exactly'
export const anonymousUser = 'anonymous'

export const emptySearchRequest: SearchRequest = {
    name: "",
    nameExactly : false,
    genres: [],
    types: [],
    cultureStatuses: [],
    architect : "",
    architectExactly : false,
    districts: []
}
