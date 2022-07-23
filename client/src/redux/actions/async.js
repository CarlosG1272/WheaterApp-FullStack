import { ADD_CITY, ERROR, GET_DEFAULT_CITIES } from "./types"; 
import axios from "axios"; 

export const getDefaultCities = () => {
    return function(dispatch){
        return axios.get(`/getDefaultOptions`)
        .then(res=> res.data)
        .then(json=> dispatch({type: GET_DEFAULT_CITIES, payload: json}))
        .catch(err=> console.error(err))
    }
}

export const addCity = (name) => {
    return function(dispatch){
        return axios.get(`/getCountryInformation/${name}`)
        .then(res=> res.data)
        .then(json=> dispatch({type: ADD_CITY, payload: json}))
        .catch(err=> dispatch({type: ERROR}))
    }
}

