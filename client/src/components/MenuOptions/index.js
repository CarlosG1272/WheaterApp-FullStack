import React, { useState } from "react";
import { GlobalContainer, MenuContainer, TextContainer, MyUl } from "./menuElements";
import { GrFormClose } from "react-icons/gr"
import { Link } from "react-router-dom"
export default function MenuOptions(){
    const [isShowing, setIsShowing] = useState(false); 

    const handleShow = () => {
        setIsShowing(!isShowing)
    }; 

    return(<GlobalContainer>
        <TextContainer onClick={handleShow}>
            Menu
            <GrFormClose/>
        </TextContainer>
        <MenuContainer isShowing={isShowing}>
            <button onClick={handleShow}>X</button>
            <MyUl>
                <Link to={"/"}>
                    LandingPage
                </Link>
                <Link to={"/"}>
                    Favorites
                </Link>
                <Link to={"/"}>  
                    Current Detail
                </Link>
                <Link to={"/"}>
                    Contact
                </Link>
            </MyUl>
        </MenuContainer>
    </GlobalContainer>)
}