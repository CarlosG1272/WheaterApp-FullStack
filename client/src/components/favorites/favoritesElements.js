import styled from "styled-components"; 

export const GlobalContainer = styled.section`
    width: 100%;
    position: absolute;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const TitleContainer = styled.section`
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Edu NSW ACT Foundation', cursive;
    font-size: 3rem;
`

export const ImagesContainer = styled.section`
    width: 95%;
    height: 90%;
    padding-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    a {
        width: 20%;
        height: 45%;
    }
`; 