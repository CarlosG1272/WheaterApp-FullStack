import React, { useEffect } from "react"; 
import { DisplayContainer, GlobalContainer, NavBarContainer, ImageContainer, SearchBarContainer, MenuContainer } from "./homeElements";
import SearhcBar from "../SearchBar/index"
import MenuOptions from "../MenuOptions";
import {useDispatch, useSelector} from "react-redux";
import { getDefaultCities } from "../../redux/actions/async";
import CityCard from "../cityCard";

export default function Home (){ 
    const dispatch = useDispatch(); 
    const cities = useSelector((state)=> state); 
    useEffect(()=> {
        dispatch(getDefaultCities())
    }, [])
    return(
        <GlobalContainer>
            <NavBarContainer>
                <ImageContainer>
                    <img src="https://nordicapis.com/wp-content/uploads/5-Best-Free-and-Paid-Weather-APIs-2019-e1587582023501.png" alt="profileimg"/>
                </ImageContainer>
                <SearchBarContainer>
                    <SearhcBar />
                </SearchBarContainer>
                <MenuContainer>
                    <MenuOptions />
                </MenuContainer>

            </NavBarContainer>
            <DisplayContainer>
                {cities.cities && cities.cities.map(c=>
                    <CityCard key={c.id} city={c}/>)    
                } 
            </DisplayContainer> 
        </GlobalContainer>
    )
}