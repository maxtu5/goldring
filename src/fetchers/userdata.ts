import {base_url, url_users_current, url_users_signin, url_users_signout, url_users_signup} from "../utils/constants";
import {User} from "../utils/types";

export async function signin(login: string, password: string, callbackOnSuccess: (u: User) => void) {
    const encodedCredentials = btoa(`${login}:${password}`);
    await fetch(`${base_url}${url_users_signin}`,
        {
            credentials: "include",
            headers: {
                'Authorization': `Basic ${encodedCredentials}`
            },
            method: "GET"
        })
        .then(data => {
            if (data.status === 200) {
                return data.text()
            } else {
                alert('Неверное имя или пароль')
                return null
            }
        })
        .then(role => {
            if (role !== null) {
                callbackOnSuccess({name: login, role: role});
                return role;
            }
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export async function signup(login: string, password: string, callbackOnSuccess: (u: User) => void) {
    const encodedCredentials = btoa(`${login}:${password}`);
    await fetch(`${base_url}${url_users_signup}`,
        {
            // credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({username: login, password: password}),
        })
        .then(data=>{
            if (data.status === 409) {
                alert('Имя уже занято')
                return null
            } else if (data.status === 201) {
                callbackOnSuccess({name: login, role: 'USER_ROLE'})
                return data.text()
            } else {
                alert('Ошибка входа')
                return null
            }
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export async function currentUser(callbackOnSuccess: (u: User | null) => void) {
    await fetch(`${base_url}${url_users_current}`, {credentials: "include"})
        .then(data => {
            if (data.status === 401) console.log('ооо')
            return data
        })
        .then(data => {
            console.log(data.status)
            return data.status === 200 ? data.json() : null
        })
        .then(user => {
            console.log(user)
            if (user !== null)
                callbackOnSuccess({name: user.username, role: user.authority});
        })
        .catch(error => {
            console.log(error)
        })
}

export async function signout() {
    await fetch(`${base_url}${url_users_signout}`,
        {
            credentials: "include",
            method: "POST"
        })
        .catch(error => {
            console.log(error)
        })
}

