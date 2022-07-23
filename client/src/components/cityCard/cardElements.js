import styled from "styled-components"; 

export const CardContainer = styled.section`
    width: 35vw;
    color: black;
    height: 30vh;
    background: ${({image})=> `url(${image})`};
    background-size: cover;
    border: .3rem solid ${({color})=> color};
    margin-top: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
        #mainTitle{
            opacity: 0;
        }
        #description{
            height: 30vh;
            width: 35vw;
            opacity: 1;
            font-size: 1.5rem;
            transform: translateX(0px)
        }
    }
`

export const MainTitleContainer = styled.section`
    width: 50%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lobster', cursive;
    font-size: 2rem;
    background: rgba( 255, 255, 255, 0.2 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 0px );
    -webkit-backdrop-filter: blur( 0px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`

export const DescriptionContainer = styled.section`
    background: rgba(0,0,0,0.7);
    position: absolute;
    color: white;
    transition: all .2s ease-in-out;
    transform: translateX(-10vw);
    opacity: 0;
    width: 0;
    height: 0;
    font-size: 0rem;
    font-family: 'Edu TAS Beginner', cursive;
    #buttonsContainer{
        z-index: 99;
        left: 0;
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    svg {
        height: 2rem;
        width: auto;
        color: white;
    }
    #delete:hover{
        color: red;
    }
    #favorite:hover{
        color: yellow;
    }
`

export const Title = styled.div`
    margin-top: 1.5rem;
    text-align: center;
    width: 100%;
    height: 5vh;
`

export const Description = styled.div`
    width: 100%;
    height: 10%;
    div{
        width: 100%;
        height: 5vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`