import React from "react";
import "./css/contact.css";
import "./css/mediaQuery.css";
import "./css/stars.scss";
import StaySharpMap from "../img/stay-sharp-maps.jpeg";

function Contact() {

    const CallBtn = () => {
        
    }

    return (
        <div className="Contact-container" id="Contact-container">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <style>@import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap');</style>
            <h1 id="Contact-title">Contact</h1>
            <div id="Contact-row">
            <a
                id="Contact-map-link"
                href="https://www.google.com/maps/place/209+Stay+Sharp+Barbershop/@37.797122,-121.2419772,17z/data=!3m1!4b1!4m5!3m4!1s0x8090411507f96bad:0x82b73283294af2af!8m2!3d37.7970395!4d-121.2397858"
                target="_blank"
            >
                <img id="stay-sharp-map" className="stay-sharp-map" src={StaySharpMap} alt="" />
            </a>
            <div className="Contact-info">

                <div className="Contact-cell">
                    <h2 id="cell-title">Contact</h2>
                    <p id="cell">(209)815-9971</p>
                    <button id="cell-btn" ><h4>Call Now</h4></button>
                </div>

                <div className="Contact-address">
                    <h2 id="address-title">Address</h2>
                    <p id="address">1462 W Yosemite Ave Ste B Manteca, CA 95337</p>
                    <a id="address-btn" target="_blank" href="https://www.google.com/maps/place/209+Stay+Sharp+Barbershop/@37.797122,-121.2419772,17z/data=!3m1!4b1!4m5!3m4!1s0x8090411507f96bad:0x82b73283294af2af!8m2!3d37.7970395!4d-121.2397858"><button id="address-btn"><h4>Get Directions</h4></button></a>
                </div>

                <div className="Contact-hours">
                    <h2 id="business-title">Business Hours</h2>
                    <p id="hours">Mon: 9AM - 6PM</p>
                    <p id="hours">Tue: 9AM - 6PM</p>
                    <p id="hours">Wed: 9AM - 6PM</p>
                    <p id="hours">Thu: 9AM - 6PM</p>
                    <p id="hours">Fri: 9AM - 6PM</p>
                    <p id="hours">Sat: 8AM - 5PM</p>
                    <p id="hours">Sun: 9AM - 3PM</p>
                </div>

            </div>
            </div>
        </div>
    );
}

export default Contact;
