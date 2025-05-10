import {base_url, url_getPlaceDisplay, url_getPlaceEdit, url_savePlaceEdit} from "../utils/constants";
import {FullPlace, PlaceForEdit} from "../utils/types";


export async function loadPlaceDisplay(id: string, refreshCallback: (place: FullPlace)=>void) {
    await fetch(`${base_url}${url_getPlaceDisplay}${id}`)
        .then(response => response.json())
        .then(data => {
            refreshCallback( {
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
    const retval = await fetch(`${base_url}${url_getPlaceEdit}${id}`)
        .then(response => response.json())
        .then(data => {
            return {
                id: data.id,
                latlon: data.latlon,
                status: data.status,
                visibility: data.visibility,
                country: data.country,
                region: data.region,
                section: data.section,
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

export async function saveEdited(place: PlaceForEdit, callbackOnSuccess: () => void) {
    console.log('save edit data')
    const bd = {
        ...place,
        types: place.typesAsString?.split(',').filter(s=>s!==''),
        genres: place.genresAsString?.split(',').filter(s=>s!==''),
        architects: place.architectsAsString?.split(',').filter(s=>s!==''),
        pages: place.pagesAsString?.split(',').filter(s=>s!==''),
        pics: parseInt(place.picsAsString || '0'),
        appeal: parseFloat(place.appealAsString || '0')
    }
    await fetch(`${base_url}${url_savePlaceEdit}`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(bd)
        })
        .then(data => {
            if (data.status === 200) {
                callbackOnSuccess()
            } else {
                alert('Failed ' + data.status);
            }
        })
        .catch(error => {
            console.log(error)
        })
}
