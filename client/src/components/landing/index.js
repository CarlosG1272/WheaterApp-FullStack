import React from "react";
import { ButtonContainer, GlobalContainer, MainDescription, MainTitler } from "./landingElements";
import {Link} from "react-router-dom"; 
export default function LandingPage() {
    const backGround = "https://images.theconversation.com/files/442675/original/file-20220126-17-1i0g402.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop"

    return(
        <GlobalContainer image={backGround}>
            <MainTitler> Welcome to Weather CG's </MainTitler>
             <MainDescription>
                Ready to know the temperature of your favorites cities? :V 
            </MainDescription>
            <ButtonContainer>
                <Link to={"/home"}>
                    <div className="btn buttonMain">Get Started!</div>
                </Link>
            </ButtonContainer>
        </GlobalContainer>
   )
}