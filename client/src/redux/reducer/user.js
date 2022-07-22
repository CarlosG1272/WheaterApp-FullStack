import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/types";

const initialState = {
    favorites: []
}

const value = window.localStorage.getItem("favorites"); 
const json = value && JSON.parse(value); 

export default function favorites (state = initialState, action) {
    let newState = {...state}; 
    if(json) newState = json;

    switch(action.type){
        case ADD_FAVORITE: 
            newState.favorites = [...newState.favorites, action.payload]
        break
        case REMOVE_FAVORITE: 
            newState.favorites = newState.favorites.filter(el=> el.id !== action.id)
        break
        default: 
        break
    }
    window.localStorage.setItem("favorites", JSON.stringify(newState))
    return {...newState}
}