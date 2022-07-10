import { ADD_CITY, GET_DEFAULT_CITIES } from "./types"

const baseURL = "http://localhost:3001/wheater"

export const getDefaultCities = () => {
    return function(dispatch){
        return fetch(`${baseURL}/getDefaultOptions`)
        .then(res=> res.json())
        .then(json=> dispatch({type: GET_DEFAULT_CITIES, payload: json}))
        .catch(err=> console.error(err))
    }
}

export const addCity = (name) => {
    return function(dispatch){
        return fetch(`/getCountryInformation/${name}`)
        .then(res=> res.json())
        .then(json=> dispatch({type: ADD_CITY, payload: json}))
    }
}

