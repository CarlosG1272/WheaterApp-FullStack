import React, { useEffect, useState } from "react"; 
import { CardContainer, Description, DescriptionContainer, MainTitleContainer, Title } from "./cardElements";
import {TiDeleteOutline} from "react-icons/ti"
import {AiOutlineStar, AiFillStar} from "react-icons/ai"
import {useDispatch, useSelector} from "react-redux"; 
import { add_favorite, remove_city, remove_favorite } from "../../redux/actions/sync";


export default function CityCard({city}){
    const [isFavorite, setIsFavorite] = useState(false); 
    const favorites = useSelector((state)=> state.favorites)


    const dispatch = useDispatch(); 
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(remove_city(city.id))
    }

    const handleAddFavorite = (e) => {
        e.preventDefault()
        dispatch(add_favorite(city))
        setIsFavorite(true)
    }
    const handleRemoveFavorite = (e) => {
        e.preventDefault()
        dispatch(remove_favorite(city.id))
        setIsFavorite(false)
    }
    useEffect(()=> {
        const coincidence = favorites.favorites.find(el=> el.id === city.id)
        if (coincidence) setIsFavorite(true); 
    }
    ,[])
    return(
    <CardContainer image={city.image} color={city.color}>
        <MainTitleContainer id="mainTitle">{city.name}</MainTitleContainer>
        <DescriptionContainer id="description">
            <div id="buttonsContainer">
                <TiDeleteOutline id="delete" onClick={handleClick}/>
                {!isFavorite ? <AiOutlineStar id="favorite" onClick={handleAddFavorite}/>:<AiFillStar onClick={handleRemoveFavorite}/>}
            </div>
            <Title>{city.name} - {city.sys.country}</Title>
            <Description>
                <div>Wheater: {city.weather[0].description}</div>
                <div>Temperature: {city.main.temp}</div>
                <div>Humidity: {city.main.humidity}</div>
            </Description>
        </DescriptionContainer>
    </CardContainer>)
}