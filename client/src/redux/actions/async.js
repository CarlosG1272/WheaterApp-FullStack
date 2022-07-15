import { ADD_CITY, GET_DEFAULT_CITIES } from "./types"

export const baseURL = `${
    process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_BACK_URL
        : "http://localhost:3001"
}`

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

