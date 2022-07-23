import React, { useState } from "react";
import { GlobalContainer, MenuContainer, TextContainer, MyUl } from "./menuElements";
import { GrFormClose } from "react-icons/gr"
import { Link } from "react-router-dom"
import {useDispatch} from "react-redux"; 
import { getDefaultCities } from "../../redux/actions/async";

export default function MenuOptions(){
    const [isShowing, setIsShowing] = useState(false); 
    const dispatch = useDispatch(); 

    const handleShow = () => {
        setIsShowing(!isShowing)
    }; 
    const handleReset = () => {
        // Before i need to clean the localStorage 
        console.log("Entre mrd")
        window.localStorage.removeItem("cities")
        console.log(window.localStorage.getItem("cities"))
        dispatch(getDefaultCities())
    }

    return(<GlobalContainer>
        <TextContainer onClick={handleShow}>
            Menu
            <GrFormClose/>
        </TextContainer>
        <MenuContainer isShowing={isShowing}>
            <button onClick={handleShow}>X</button>
            <MyUl>
                <Link to={"/colors"}>
                    Colors border?
                </Link>
                <Link to={"/favorites"}>
                    Favorites
                </Link>
                <div onClick={handleReset}>  
                    Reload default cities
                </div>
                <Link to={"/about"}>
                    Contact
                </Link>
            </MyUl>
        </MenuContainer>
    </GlobalContainer>)
}