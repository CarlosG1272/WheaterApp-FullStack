import styled from "styled-components";

export const GlobalContainer = styled.section`
    height: 8vh;
    width: 100%;
    display: flex;
    align-items: center;
    div{
        width: 20%;
        display: flex;
        align-items: center;
    }
`

export const MyInput = styled.input`
    width: 100%;
    height: 2rem;
`
export const Buttons = styled.button`
    width: 5rem;
    height: 2rem;
    background-color: #0077b6;
    border: .1rem solid white;
    margin: .5rem;
    cursor: pointer;
    &:hover {
        background-color: white;
    }
`