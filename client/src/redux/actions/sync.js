import { REMOVE_CITY, SELECT_DETAIL_CITY } from "./types";

export const remove_city = (id)=> ({type: REMOVE_CITY, id}); 
export const select_city = (details)=> ({type: SELECT_DETAIL_CITY, payload: details})