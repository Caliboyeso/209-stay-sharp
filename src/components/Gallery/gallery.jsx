import React from "react";
import "./css/gallery.css";
import "./css/mediaQuery.css";
import Haircut1 from "../img/haircut1.png";
import Haircut2 from "../img/haircut2.png";
import Haircut3 from "../img/haircut3.png";
import Haircut4 from "../img/haircut4.png";
import Haircut5 from "../img/haircut5.png";
import Haircut6 from "../img/haircut6.png";
import Haircut7 from "../img/haircut7.png";
import Haircut8 from "../img/haircut8.png";
import Haircut9 from "../img/haircut9.png";

function Gallery() {

    return (
        <div className="Gallery-container">
            <style>@import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap');</style>
            <h1 id="Gallery-title">Gallery</h1>

            <div className="Gallery-row1">
                <img id="haircut1" className="Gallery-img" src={Haircut1} alt="" />
                <img id="haircut2" className="Gallery-img" src={Haircut2} alt="" />
                <img id="haircut3" className="Gallery-img" src={Haircut3} alt="" />
            </div>

            <div className="Gallery-row2">
                <img id="haircut4" className="Gallery-img" src={Haircut4} alt="" />
                <img id="haircut5" className="Gallery-img" src={Haircut5} alt="" />
                <img id="haircut6" className="Gallery-img" src={Haircut6} alt="" />
            </div>

            <div className="Gallery-row3">
                <img id="haircut7" className="Gallery-img" src={Haircut7} alt="" />
                <img id="haircut8" className="Gallery-img" src={Haircut8} alt="" />
                <img id="haircut9" className="Gallery-img" src={Haircut9} alt="" />
            </div>

        </div>
    );
};

export default Gallery;