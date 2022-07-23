import styled from "styled-components";

export const GlobalContainer = styled.section`
    background: ${({url})=> `url(${url})`};
    background-size: contain;
    background-position: center;
    min-height: 100%;
    height: max-content;
    width: 100%;
    position: absolute;
    background-color: black;
`
export const ErrorContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 5%;
`
export const NavBarContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    background-color: #0b1926;
    margin-bottom: 2rem;
`
export const ImageContainer = styled.div`
    height: 10%;
    width: 20%;
    display: flex;
    justify-content:center;
    align-items: center;
    a{
        height: 100%;
        width: auto;
        display: flex;  
    }
    svg{
        margin: auto;
        height: 4rem;
        width: auto;
        color: orange;
    }
`
export const SearchBarContainer = styled.div`
    width: 60%;
    height: 10vh;
    display: flex;
    align-items: center;
`

export const MenuContainer = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
`
export const DisplayContainer = styled.div`
    width: 100%;
    height: max-content;
    min-height: 100%;
    display: flex; 
    flex-wrap: wrap;
    justify-content: center;
`