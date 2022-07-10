import React from "react"; 
import { CardContainer, Description, DescriptionContainer, MainTitleContainer, Title } from "./cardElements";

export default function CityCard({city}){

    return(
    <CardContainer image={city.image} color={city.color}>
        <MainTitleContainer id="mainTitle">{city.name}</MainTitleContainer>
        <DescriptionContainer id="description">
            <Title>{city.name} - {city.sys.country}</Title>
            <Description>
                <div>Wheater: {city.weather[0].description}</div>
                <div>Temperature: {city.main.temp}</div>
                <div>Humidity: {city.main.humidity}</div>
            </Description>
        </DescriptionContainer>
    </CardContainer>)
}