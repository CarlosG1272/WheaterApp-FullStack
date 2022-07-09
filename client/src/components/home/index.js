import React from "react"; 
import { DisplayContainer, GlobalContainer, NavBarContainer, ImageContainer, SearchBarContainer } from "./homeElements";
import SearhcBar from "../SearchBar/index"

export default function Home (){ 
    return(
        <GlobalContainer>
            <NavBarContainer>
                <ImageContainer>
                    <img src="http://studies.aljazeera.net/sites/default/files/articles/2022-05/web_10.jpg" alt="profileimg"/>
                </ImageContainer>
                <SearchBarContainer>
                    <SearhcBar />
                </SearchBarContainer>
            </NavBarContainer>
            <DisplayContainer>

            </DisplayContainer>
        </GlobalContainer>
    )
}