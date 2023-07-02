import styled from "styled-components";

export const HomeContainer = styled.div`
    background: linear-gradient(180deg, #DBEBFF 0%, #DBEBFF 0.01%, #B6E8D6 47.40%, #97E464 100%);
    height: 3155px;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black;
    align-items: center;

    h1 {
        font-size: 64px;
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        margin: 0;
        margin-top: 35vh;
    }

    span {
        color: #5483BD;
        margin: 0;
    }

    h4 {
        font-size: 48px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        margin: 0;
        margin-bottom: 45vh;
    }
`;