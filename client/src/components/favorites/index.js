import React from "react"; 
import { GlobalContainer, ImagesContainer, TitleContainer } from "./favoritesElements";
import {useSelector} from "react-redux"; 
import {Link} from "react-router-dom"; 
import FavoriteCard from "./favoriteCard";

export default function Favorites() {
    const favorites = useSelector((state)=> state.favorites); 
    return(
        <GlobalContainer>
            <TitleContainer>FAVORITES</TitleContainer>
            <ImagesContainer>
                {favorites.favorites && favorites.favorites.map(f=> 
                <Link to={`/city/${f.id}`} style={{textDecoration: "none"}}>
                    <FavoriteCard city={f}/>                    
                </Link>)}
            </ImagesContainer>
        </GlobalContainer>
    )
}