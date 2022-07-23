import { ADD_FAVORITE, REMOVE_CITY, REMOVE_FAVORITE, RESET_ERROR, SELECT_DETAIL_CITY } from "./types";

export const remove_city = (id)=> ({type: REMOVE_CITY, id}); 
export const select_city = (id)=> ({type: SELECT_DETAIL_CITY, id})




export const add_favorite = (city)=> ({type: ADD_FAVORITE, payload: city})
export const remove_favorite = (id) => ({type: REMOVE_FAVORITE, id})
export const reset_error = () => ({type: RESET_ERROR})