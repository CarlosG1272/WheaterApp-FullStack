import styled from "styled-components"; 

export const GlobalContainer = styled.section`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url("https://res.cloudinary.com/dhr6yxxlw/image/upload/v1657935803/es5ahymrkkyqehqnskfq.png");
    background-size: cover;
`
export const MainContainer = styled.section`
    height: 80%;
    width: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    section{
        width: 100%;
    }
`
export const FirstRowContainer = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 20%;
    h1 {
        width: 40%;
        font-size: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: yellow;
    }
    div {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: center;
        img {
            height: 80%;
            width: auto;
        }
    }
`


export const SecondRowContainer = styled.section`
    height: 70%;
    display: flex;
    #ImageContainer{
        width: 55%;
        height: 100%;
        display: flex;
        img {
            width: 90%;
            height: auto;
            margin: auto;
            outline: .5rem solid white;
            border-radius: 1rem;
        }
    }
    #InformationContainer{
        width: 40%;
        height: 120%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Edu TAS Beginner', cursive;
        font-size: 1.5rem;
        background-color: white;
        border-radius: 2rem;
        ul {
            width: 70%;
            list-style: none;
            li {
                width: 100%;
                margin: .5rem;
            }
        }
        li:before{
            content: attr(title);
            margin-bottom: 3px;
            display: block;
            min-width: 98px;
            font-size: 10px;
            line-height: 10px;
            font-weight: bold;
            text-transform: uppercase;
            color: #969696;
            display: block;
        }

    }
`

