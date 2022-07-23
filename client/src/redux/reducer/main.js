import { ADD_CITY, ERROR, GET_DEFAULT_CITIES, REMOVE_CITY, RESET_ERROR, SELECT_DETAIL_CITY } from "../actions/types";

const initialState = {
    cities: [],
    city: [],
    selected: {},
    errors: false
}

const value = window.localStorage.getItem("cities"); 
const json = value && JSON.parse(value)

export default function main (state = initialState, action) {
    let newState = {...state}; 
    if (json) newState = json; 

    switch(action.type){
        case GET_DEFAULT_CITIES: 
            if(!json) {
                newState.cities = action.payload;
            } 
            break
        case ADD_CITY:
            newState.cities.unshift(action.payload)
            break
        case ERROR: 
            newState.errors = true; 
        break
        case RESET_ERROR:
            newState.errors = false;     
        break
        case REMOVE_CITY: 
            newState.cities = newState.cities.filter(el=> el.id !== action.id)
            break
        case SELECT_DETAIL_CITY:
            let coincidence = newState.cities.find(el=> el.id.toString() === action.id.toString()); 
            newState.selected = coincidence;
            break
        default:
            break
    }
    window.localStorage.setItem("cities", JSON.stringify(newState))
    return {...newState}
}