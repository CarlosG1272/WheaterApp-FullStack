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
    border: .2rem solid rgb(250, 86, 28);
    border-radius: 1rem;
    background-color: transparent;
    padding-left: 1rem;
    color: white;
    font-size: 1.5rem;
`
export const Buttons = styled.button`
    width: 5rem;
    height: 2rem;
    border: .2rem solid rgb(250, 86, 28);
    background-color: transparent;
    color: rgb(250, 86, 28);
    border-radius: .5rem;
    margin: .5rem;
    cursor: pointer;
    &:hover {
        background-color: rgb(250, 86, 28);
        border: .2rem solid black;
        color: black;
    }
`