import React from "react";
import { GlobalContainer, Buttons, MyInput } from "./searchElement";

export default function SearhcBar(){
    return(
        <GlobalContainer>
                <MyInput type={"text"} placeholder="Insert city name..." /> 
                <div>
                    <Buttons>Search</Buttons>
                    <Buttons>Go Detail</Buttons>
                </div>

        </GlobalContainer>
    )

}