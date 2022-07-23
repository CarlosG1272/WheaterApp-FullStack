import React, { useEffect } from "react"; 
import { DisplayContainer, GlobalContainer, NavBarContainer, ImageContainer, SearchBarContainer, MenuContainer, ErrorContainer } from "./homeElements";
import SearhcBar from "../SearchBar/index"
import MenuOptions from "../MenuOptions";
import {useDispatch, useSelector} from "react-redux";
import { getDefaultCities } from "../../redux/actions/async";
import CityCard from "../cityCard";
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMsg";
import { reset_error } from "../../redux/actions/sync";
import {TiWeatherPartlySunny} from "react-icons/ti"; 

export default function Home (){ 
    const dispatch = useDispatch(); 
    const cities = useSelector((state)=> state.main); 
    const url = "https://4.bp.blogspot.com/-J9Yta-atQZU/U4jHgisGFhI/AAAAAAACPjg/4zXKVSXvyVE/s1600/20.gif"
    useEffect(()=> {
        dispatch(getDefaultCities())
    }, [])
    useEffect(()=> {
        if(cities.errors) { 
            setTimeout(()=>dispatch(reset_error()), 3000 ) }
    },[cities.errors])
    return(
        <GlobalContainer url={url}>
            {cities.errors && <ErrorContainer>
                <ErrorMessage />
            </ErrorContainer>}

            <NavBarContainer>
                <ImageContainer>
                    <Link to={"/"}>
                        <TiWeatherPartlySunny />
                    </Link>
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
                <Link key={c.id} to={`/city/${c.id}`} style={{width: "35vw",
                    height: "30vh", margin: "2rem", marginBottom: "5rem", textDecoration:"none"}}>
                    <CityCard city={c}/>
                </Link>)
                } 
            </DisplayContainer> 
        </GlobalContainer>
    )
}