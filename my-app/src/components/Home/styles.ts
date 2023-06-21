import styled from "styled-components";
import { Carousel } from "antd";

interface CarouselProps {
    background: string;
}

export const HomeContainer = styled.div`
    background-color: #DBEBFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 100px;
    height: 95.6vh;
`;

export const DetailsContainer = styled(Carousel)<CarouselProps>`
    width: 650px;
    height: 600px;
    background-color: #F9EFCD;
    border-radius: 20px;
    color: black;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    img {
        margin-top: 30px;
        width: 500px;
        height: 300px;
        border-radius: 10px;
    }

    .slick-list .slick-track div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .slick-list .slick-track div div div {
        display: flex !important;
        width: 500px !important;
    }

    .slick-list .slick-track .roles {
        flex-direction: row;
    }

    .slick-list .slick-track .roles div {
        width: auto !important;
    }
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    p {
        margin-top: 0;
    }
    
    button {
        display: inline-flex;
        align-self: flex-end;
        margin-top: 30px;
        background-color: #284775;
        border-radius: 20px;
        border: none;
        color: white;
        padding: 16px 24px;
        cursor: pointer;
    }
`;

export const RoleContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 20px;

    div {
        background-color: #85C9E3;
        color: black;
        padding: 8px 16px;
        border-radius: 20px;
    }
`;

export const WordsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-left: 24px;
`;

export const Button = styled.button`
    background: transparent;
    width: 100%;
    padding: 16px 32px;
    margin: 30px;
    border: none;
    font-size: 40px;
    line-height: 48px;
    text-align: left;
    font-weight: 600;
    cursor: pointer;
`;