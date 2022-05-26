import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeMainSection from "./HomeMainSection";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeForSteps from "./HomeForSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeContact from "./HomeContact";


const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeForSteps/>
            <HomeAboutUs/>
            <HomeMainSection/>
            <HomeContact/>
        </>

    )
}

export default Home