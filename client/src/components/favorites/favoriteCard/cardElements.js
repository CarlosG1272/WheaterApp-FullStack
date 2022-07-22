import styled from "styled-components";


export const GlobalContainer = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TitleContainer = styled.div`
    color: black;
    height: 10%;
    width: auto;
    
`

export const ImageContainer = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    justify-content: center;
    perspective: 1000px;
    img {
        height: 100%;
        width: 15vw;
        transform: rotateY(45deg);
        transition: transform 1s ;
        &:hover{
            transform: rotateY(0deg);
        }
    }
`