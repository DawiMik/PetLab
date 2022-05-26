import React from 'react';
import {Link} from "react-router-dom";
import { Link as Scroll } from 'react-scroll'

const HomeHeader = () => {
    return (
        <>

            <div className="header">
                <div className="header_image"></div>
                <div className="login_panel">
                    <Link to="/login">Zaloguj</Link>
                    <Link to="/register">Załóż konto</Link>

                </div>
                <div className="menu">
                    <Link to="/" className="link">Start</Link>
                    <Scroll to="for_steps" smooth duration={500} className="link" style={{cursor:'pointer'}}>O co chodzi?</Scroll>
                    <Scroll to="about_us" smooth duration={500}className="link" style={{cursor:'pointer'}}>O nas</Scroll>
                    <Scroll to="who_we_help" smooth duration={500} className="link" style={{cursor:'pointer'}}>Fundacja i organizacje</Scroll>
                    <Scroll to="contact" smooth duration={500} className="link" style={{cursor:'pointer'}}>Kontakt</Scroll>
                </div>
                <div className="start_help">
                    <h1>Zacznij pomagać!</h1>
                    <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <div className="decoration"></div>
                    <div className="get_items_container">
                        <Link to="/login">ODDAJ RZECZY</Link>
                        <Link to="/login">ZORGANIZUJ ZBIÓRKĘ</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeHeader