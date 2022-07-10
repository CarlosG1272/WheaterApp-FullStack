import styled from "styled-components";

export const GlobalContainer = styled.section`
    min-height: 100%;
    height: max-content;
    width: 100%;
    position: absolute;
    background-color: black;
`

export const NavBarContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    background-color: #293b6b;
    margin-bottom: 2rem;
`
export const ImageContainer = styled.div`
    height: 10%;
    width: 20%;
    display: flex;
    img{
        margin: auto;
        height: 4rem;
        width: auto;
    }
`
export const SearchBarContainer = styled.div`
    width: 60%;
    height: 10vh;
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
    gap: 1rem;
    background-color: black;
`