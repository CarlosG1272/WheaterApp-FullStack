import styled from "styled-components"; 

export const GlobalContainer = styled.section`
    height: 100vh;
    width: 100vw;
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({image})=> `url(${image})`};
`

export const MainTitler = styled.div`
    width: 70%;
    margin-top: 5rem;
    height: max-content;
    display: flex;
    justify-content: center;
    background-color: yellow;
    font-size: 4rem;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.6px);
    -webkit-backdrop-filter: blur(10.6px);
    border: 1px solid rgba(255, 255, 255, 0.54);
`

export const MainDescription = styled.div`
    background-color: blueviolet;
    width: 60%;
    height: max-content;
    font-size: 2rem;
    margin-top: 8rem;
    display: flex;
    justify-content: center;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.6px);
    -webkit-backdrop-filter: blur(10.6px);
    border: 1px solid rgba(255, 255, 255, 0.54);
`

export const ButtonContainer = styled.div`
a{
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
    width: 100%;
    height: 100%;
    margin-top: 8rem;
    display: flex;
    justify-content: center;
    z-index: 0;
    .buttonMain {
        width: 30%;
        height: 20%;
        position: relative;
        padding: 1.4rem 3.1rem 1.4rem 4.2rem;
        font-size: 1.4rem;
        color: black;
        letter-spacing: 1.1rem;
        text-transform: uppercase;
        transition: all 600ms cubic-bezier(0.77, 0, 0.175, 1);
        cursor: pointer;
        user-select: none;
        text-align: center;
        border-radius: 5rem;
        border: .1rem solid yellow;
    }
    .btn:after,
    .btn:before {
        content: "";
        position: absolute;
        transition: inherit;
        z-index: -1;
        left: 0;
        height: 0;
        width: 100%;
        border-radius: 5rem;
    }
    .btn:before{
        top: 0;
        border: 1px solid black;
        border-top: 0;
        border-bottom: 0;
    }
    .btn:after{
        bottom: 0;
        height: 0;
    }
    .btn:hover {
        color: white;
        transition-delay: 0.6s;
    }
    .btn:hover:before {
        transition-delay: 0s;
        height: 100px;
    }
    .btn:hover:after {
        background: black;
        transition-delay: 0.4s;
        height: 100px;
    }
   

`