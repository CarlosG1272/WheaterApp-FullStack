import styled from "styled-components"; 

export const GlobalContainer = styled.section`
    transition: all 1s; 
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`

export const TextContainer = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 2rem;
`

export const MenuContainer = styled.div`
    position: absolute;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    transition: ${({ isShowing }) =>
        isShowing ? "top 0.75s ease-out" : "top 0.75s ease-in"};
    top: ${({isShowing})=> isShowing ? "0":"-100%"};
    background-color: #fa561c;
    button{
        position: absolute;
        top: 3px;
        right: 3px;
        width: 2rem;
        background-color: red;
        cursor: pointer;
    }
`
export const MyUl = styled.div`
        text-decoration: none;
        list-style: none;
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        a, div{
            width: 100%;
            height: 5vh;
            display: flex;
            text-decoration: none;
            color: white;
            justify-content: center;
            align-items: center;
            outline: 2px solid #0b1926;
            cursor: pointer;
            &:hover{
                background-color: orange;
            }
        }
`