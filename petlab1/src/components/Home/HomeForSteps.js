import React from 'react';
import {Link} from "react-router-dom";

const HomeForSteps = () => {
    return (
        <div id="for_steps">
            <h1>Wystarczą 4 proste kroki</h1>
            <div className="decoration"></div>
            <div className="steps_container">
                <div className="step">
                    <div className="icon_1"></div>
                    <h1>Wybierz rzeczy</h1>
                    <div className="line"></div>
                    <h2>ubrania, zabawki, sprzęt i inne</h2>
                </div>
                   <div className="step">
                    <div className="icon_2"></div>
                    <h1>Spakuj je</h1>
                    <div className="line"></div>
                    <h2>skorzystaj z worków na śmieci</h2>
                </div>
                   <div className="step">
                    <div className="icon_3"></div>
                    <h1>Zdecyduj komu chcesz pomóc</h1>
                    <div className="line"></div>
                    <h2>wybierz zaufane miejsce</h2>
                </div>
                   <div className="step">
                    <div className="icon_4"></div>
                    <h1>Zamów kuriera</h1>
                    <div className="line"></div>
                    <h2>kurier przyjedzie w dogodnym terminie</h2>
                </div>
            </div>
            <Link to="/login" className="get_item">ODDAJ RZECZY</Link>
        </div>
    )
}

export default HomeForSteps