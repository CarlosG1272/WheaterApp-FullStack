import React from "react";
import { GlobalContainer, ImageContainer, TitleContainer } from "./cardElements";

export default function FavoriteCard({city}) {
    return(
    <GlobalContainer>
        <TitleContainer>{city.name}</TitleContainer>    
        <ImageContainer>
            <img src={city.image} alt={city.name}/>
        </ImageContainer>
    </GlobalContainer>)
}