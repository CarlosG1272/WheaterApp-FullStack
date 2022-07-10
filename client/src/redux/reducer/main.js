import { ADD_CITY, GET_DEFAULT_CITIES, REMOVE_CITY, SELECT_DETAIL_CITY } from "../actions/types";

const initialState = {
    cities: [],
    city: [],
    selected: {}
}


export default function rootReducer (state = initialState, action) {
    let newState = {...state}; 
    switch(action.type){
        case GET_DEFAULT_CITIES: 
            newState.cities = action.payload; 
            break
        case ADD_CITY:
            newState.cities = [...newState.cities, action.payload]
            break
        case REMOVE_CITY: 
            newState.cities = newState.cities.filter(el=> el.id !== action.id)
            break
        case SELECT_DETAIL_CITY:
            newState.selected = action.payload; 
            break
        default:
            break
    }
    return newState
}