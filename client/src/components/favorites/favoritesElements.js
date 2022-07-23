import styled from "styled-components"; 

export const GlobalContainer = styled.section`
    background: url(https://1.bp.blogspot.com/-uwJ-p_lz3GA/U4jHbVEye_I/AAAAAAACPiY/sTH6PCvbGRg/s1600/1.gif);
    background-size: contain;
    min-height: 100%;
    width: 100%;
    position: absolute;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    a {
        color: wheat;
        width: 20%;
        height: 15rem;
    }
`; 