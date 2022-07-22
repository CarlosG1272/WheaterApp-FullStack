import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { select_city } from "../../redux/actions/sync";
import {
  GlobalContainer,
  MainContainer,
  FirstRowContainer,
  SecondRowContainer,
} from "./detailElements";
import "./animation.scss"; 


export default function DetailCity() {
  const params = useParams();
  const dispatch = useDispatch();
  const city = useSelector(state=> state.main.selected); 

  useEffect(() => {
    dispatch(select_city(params.id));
  }, []);   
  return (
    <GlobalContainer>
        {!city.weather ? <div>Loading...</div>:
        <MainContainer>
            <FirstRowContainer>
                <h1>
                    {city.name}
                </h1>
                <div id="iconContainer">
                    <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt={city.weather[0].description}/>    
                </div>
            </FirstRowContainer>
            
            <SecondRowContainer>
                <div id="ImageContainer">
                    <img src={city.image} alt={city.weather[0].description}/>
                </div>
                <div id="InformationContainer">
                    <ul>
                        <li title="coordinates">{city.coord.lon} - {city.coord.lat}</li>
                        <li title="weather status">{city.weather[0].main}</li>
                        <li title="weather description">{city.weather[0].description}</li>
                        <li title="average temperature">{city.main.temp}</li>
                        <li title="min - max">{city.main.temp_min} - {city.main.temp_max}</li>
                        <li title="pressure">{city.main.pressure}</li>
                        <li title="humidity">{city.main.humidity}</li>
                        <li title="sea level">{city.main.sea_level || "No information"}</li>
                    </ul>
                </div>
            </SecondRowContainer>
        </MainContainer>}
        
    </GlobalContainer>
  );
}
