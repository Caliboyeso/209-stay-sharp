import React from "react";
import "./css/background.css";
import "./css/mediaQuery.css";
import "./css/stars.scss";

function Background() {

    const BackgroundBtn = () => {
        if (window.matchMedia("(min-width: 1920px)").matches) {
            window.scrollTo({top: 990, behavior: "smooth"});
        } else if (window.matchMedia("(min-width: 1280px)").matches) {
            window.scrollTo({top: 696, behavior: "smooth"});
        } else if (window.matchMedia("(min-width: 428px)").matches) {
            window.scrollTo({top: 938, behavior: "smooth"});
        } else if (window.matchMedia("(min-width: 414px)").matches) {
            window.scrollTo({top: 907, behavior: "smooth"});
        } else if (window.matchMedia("(min-width: 390px)").matches) {
            window.scrollTo({top: 852, behavior: "smooth"});
        } else if (window.matchMedia("(min-width: 375px)").matches) {
            window.scrollTo({top: 820, behavior: "smooth"});
        } else {
            window.scrollTo({top: 960, behavior: "smooth"});
        }
    }

    return (
        <div className="Background-container" id="Background-container">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <h1 id="Background-title">209  Stay Sharp Barbershop</h1>
            <h3 id="Background-message">Barber Shop located in Manteca, CA</h3>
            <h3 id="Background-message2">Opens at 9am</h3>
            <div id="Background-button" className="Background-button" onClick={BackgroundBtn}>
                <button id="Background-btn-text">Meet the Barbers</button>
            </div>
        </div>
    )

}

export default Background;