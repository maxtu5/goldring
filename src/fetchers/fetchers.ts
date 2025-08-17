import {
    base_url, local_runner_url,
    url_getinitial,
    url_getPlaceDisplay,
    url_getPlaceEdit, url_lr_jwt, url_lr_saveLocal,
    url_savePlaceEdit,
    url_savePlaceNew, url_stats
} from "../utils/constants";
import {FullPlace, LightPlace, PlaceForEdit, User} from "../utils/types";

export async function loadInitialData(callbackOnResullt: (data: any) => void) {
    fetch(`${base_url}${url_getinitial}`, {
        credentials: "include"
    })
        .then(response => response.json())
        .then(data => {
            callbackOnResullt(data)
        })
        .catch(error => {
            console.log(error)
            callbackOnResullt(null)
        })
}

export async function loadPlaceDisplay(id: string, refreshCallback: (place: FullPlace) => void) {
    await fetch(`${base_url}${url_getPlaceDisplay}${id}`, {
        credentials: "include"
    })
        .then(response => response.json())
        .then(data => {
            refreshCallback({
                id: data.id,
                latlon: data.latlon,
                name: data.name,
                appeal: data.appeal,
                date: data.date,
                address: data.address,
                dateAdded: data.dateAdded,
                description: data.description,
                genres: [...data.genres],
                types: [...data.types],
                architects: data.architects,
                pages: data.pages ? [...data.pages] : [],
                cultureStatus: data.cultureStatus,
                pics: data.pics,
                bigLines: [...data.bigLines],
                smallLine: data.smallLine
            })
        })
        .catch(error => {
            console.log(error)
        })
}

export async function loadPlaceEdit(id: string) {
    const retval = await fetch(`${base_url}${url_getPlaceEdit}${id}`, {
        credentials: "include"
    })
        .then(response => response.json())
        .then(data => {
            return {
                id: data.id,
                latlon: data.latlon,
                status: data.status,
                visibility: data.visibility,
                country: data.country,
                regionCode: data.regionCode,
                addString: data.addString,
                appeal: data.appeal,
                name: data.name,
                monument: data.monument,
                cultureStatus: data.cultureStatus,
                date: data.date,
                description: data.description,
                genres: [...data.genres],
                types: [...data.types],
                architects: [...data.architects],
                pages: [...data.pages],
                dateAdded: data.dateAdded,
                dateModified: data.dateModified,
                pics: data.pics
            }
        })
        .catch(error => {
            console.log(error)
        })
    // @ts-ignore
    return retval;
}

export async function savedEditedWithJwt(place: PlaceForEdit, callbackOnSuccess: () => void) {
    await fetch(`${local_runner_url}${url_lr_jwt}`)
        .then(response => {
            if (!response.ok) {
                console.log('resp not ok')
                throw new Error("Request failed");
            }
            return response.text()
        })
        .then(token => {
            saveLocal(place, token, callbackOnSuccess)
        })
        .catch(error => {
            alert("Local server not available")
        });
}

async function saveEdited(jsonString: string, token: string, callbackOnSuccess: () => void) {
    console.log('save edit')
    await fetch(`${base_url}${url_savePlaceEdit}`,
        {
            // credentials: "include",
            headers: {
                // 'Accept': 'application/json',
                // 'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            method: "POST",
            body: jsonString
        })
        .then(data => {
            if (data.status === 200) {
                return data.json()
            } else {
                alert('Failed ' + data.status);
            }
        })
        .then(json=>callbackOnSuccess())
        .catch(error => {
            console.log(error)
        })
}

export async function saveNew(place: PlaceForEdit, callbackOnSuccess: (p: LightPlace) => void) {
    console.log('save new place')
    const body = {
        latlon: place.latlon,
        name: place.name,
        date: place.date,
        description: place.description,
        cultureStatus: place.cultureStatus,
        status: place.status,
        visibility: place.visibility,
        country: place.country,
        regionCode: place.regionCode,
        addString: place.addString,
        monument: place.monument,
        types: place.types,
        genres: place.genres,
        architects: place.architectsAsString?.split(',').filter(s => s !== '').map(s => s.trim()),
        pages: place.pagesAsString?.split(',').map(s => s.trim()).filter(s => s !== '').map(s => s.trim()),
        pics: parseInt(place.picsAsString || '0'),
        appeal: parseFloat(place.appealAsString || '0')
    }
    console.log(JSON.stringify(body))
    await fetch(`${base_url}${url_savePlaceNew}`,
        {
            credentials: "include",
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // },
            method: "POST",
            body: JSON.stringify(body)
        })
        .then(data => {
            if (data.status === 200) {
                return data.json()
            } else {
                alert('Failed ' + data.status);
            }
        })
        .then(data => callbackOnSuccess({
            id: data.id,
            cultureStatus: data.cultureStatus,
            date: data.date,
            genres: [...data.genres],
            latlon: data.latlon,
            rating: data.appeal,
            status: data.status,
            types: [...data.types],
            visibility: data.visibility
        }))
        .catch(error => {
            console.log(error)
        })
}

export async function loadStats(callbackOnSuccess: (s: string) => void) {
    await fetch(`${base_url}${url_stats}`, {
        credentials: "include"
    })
        .then(response => response.text())
        .then(data => callbackOnSuccess(data))
        .catch(error => {
            console.log(error)
        })
}

export async function saveLocal(place: PlaceForEdit, token: string, callbackOnSuccess: () => void) {
    console.log('save local')
    const body = {
        ...place,
        types: place.typesAsString?.split(',').filter(s => s !== ''),
        genres: place.genresAsString?.split(',').filter(s => s !== ''),
        architects: place.architectsAsString?.split(',').filter(s => s !== ''),
        pages: place.pagesAsString?.split(',').map(s => s.trim()).filter(s => s !== ''),
        pics: parseInt(place.picsAsString || '0'),
        appeal: parseFloat(place.appealAsString || '0')
    }
    await fetch(`${local_runner_url}${url_lr_saveLocal}`, {
        method: 'POST',
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => {
            if (response.status === 200) return response.text()
            else alert ("not saved local")
        })
        .then(text=> {
            if (text) saveEdited(text, token, callbackOnSuccess)
            alert('saved local ' + text)
        })
}
