import React from "react";
import { GlobalContainer, ImageContainer, TitleContainer } from "./cardElements";
import {RiDeleteBin7Line} from "react-icons/ri"; 
import {useDispatch} from "react-redux"; 
import { remove_favorite } from "../../../redux/actions/sync";

export default function FavoriteCard({city}) {
    const dispatch = useDispatch(); 
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(remove_favorite(city.id))
    }
    return(
    <GlobalContainer>
        <TitleContainer>{city.name}</TitleContainer>    
        <ImageContainer>
            <RiDeleteBin7Line onClick={handleDelete}/>
            <img src={city.image} alt={city.name}/>
        </ImageContainer>
    </GlobalContainer>)
}