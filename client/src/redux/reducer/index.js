import { combineReducers } from "redux"; 
import main from "./main";
import favorites from "./user";

export default combineReducers({
    main,
    favorites
})