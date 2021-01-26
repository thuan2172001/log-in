import React from 'react'

let token = NaN
export const register = (username, password) => {
    const method = {
        method : "POST",
        headers : {"Content-type" : "Application/json"},
        body : JSON.stringify({username, password})
    }

    return fetch("/api/register", method).then(data => data.json())
}

export const login = (username, password) => {
    const method = {
        method : "POST",
        headers : {"Content-type" : "Application/json"},
        body : JSON.stringify({username, password})
    }

    return fetch("/api/authentication", method).then(data => data.json()).then(token => updateToken(token))
}

export const updateToken = (authToken) => {
    token = authToken.token
}

export const logout = () => {
    token = NaN
    console.log(token)
}
export const getUsers = () => {
    const method = {
        method : "GET",
        headers : authHeaders()
    }
    return fetch("/api/users", method).then(data => data.json())
}
export const authHeaders = () => {
    return {"x-access-token" : token}
}