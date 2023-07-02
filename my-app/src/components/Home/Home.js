import React from "react";
import Timeline from "../common/Timeline/Timeline.js";
import {
    HomeContainer,
    TitleContainer,
} from "./styles.ts";

function Home() {
    return (
        <HomeContainer>
            <TitleContainer>
                <h1>Hi, I'm <span>Jun Nguyen</span></h1>
                <h4>Your reliable 3-in-1 engineer</h4>
            </TitleContainer>
            <Timeline />
        </HomeContainer>
    )
}

export default Home;