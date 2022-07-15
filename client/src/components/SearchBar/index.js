import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCity } from "../../redux/actions/async";
import { GlobalContainer, Buttons, MyInput } from "./searchElement";

export default function SearhcBar(){
    const [input, setInput] = useState(""); 
    const dispatch = useDispatch(); 
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleAdd = () => {
        dispatch(addCity(input)); 
    }
    return(
        <GlobalContainer>
                <MyInput type={"text"} value={input} onChange={handleChange} placeholder="Insert city name..." /> 
                <div>
                    <Buttons onClick={handleAdd}>Search</Buttons>
                </div>

        </GlobalContainer>
    )

}