import React from "react";
import "./css/gallery.css";
import "./css/mediaQuery.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-bootstrap/Carousel";
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
    <div className="Gallery-container" id="Gallery-container">
      <style>@import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap');</style>
      <h1 id="Gallery-title">Gallery</h1>

      <Carousel fade id="Carousel" className="Carousel">
        {/* Haircut #1 */}
        <Carousel.Item id="Carousel-item">
          <img
            id="Gallery-img"
            className="d-block w-100"
            src={Haircut1}
            alt="First slide"
          />
        </Carousel.Item>

        {/* Haircut #2 */}
        <Carousel.Item id="Carousel-item">
          <img
            id="Gallery-img"
            className="d-block w-100"
            src={Haircut2}
            alt="Second slide"
          />
        </Carousel.Item>

        {/* Haircut #3 */}
        <Carousel.Item id="Carousel-item">
          <img
            id="Gallery-img"
            className="d-block w-100"
            src={Haircut3}
            alt="Third slide"
          />
        </Carousel.Item>

        {/* Haircut #4 */}
        <Carousel.Item id="Carousel-item">
          <img
            id="Gallery-img"
            className="d-block w-100"
            src={Haircut4}
            alt="Third slide"
          />
        </Carousel.Item>

        {/* Haircut #5 */}
        <Carousel.Item id="Carousel-item">
          <img
            id="Gallery-img"
            className="d-block w-100"
            src={Haircut5}
            alt="Third slide"
          />
        </Carousel.Item>

        {/* Haircut #6 */}
        <Carousel.Item id="Carousel-item">
          <img
            id="Gallery-img"
            className="d-block w-100"
            src={Haircut6}
            alt="Third slide"
          />
        </Carousel.Item>

        {/* Haircut #7 */}
        <Carousel.Item id="Carousel-item">
          <img
            id="Gallery-img"
            className="d-block w-100"
            src={Haircut7}
            alt="Third slide"
          />
        </Carousel.Item>

        {/* Haircut #8 */}
        <Carousel.Item id="Carousel-item">
          <img
            id="Gallery-img"
            className="d-block w-100"
            src={Haircut8}
            alt="Third slide"
          />
        </Carousel.Item>

        {/* Haircut #9 */}
        <Carousel.Item id="Carousel-item">
          <img
            id="Gallery-img"
            className="d-block w-100"
            src={Haircut9}
            alt="Third slide"
          />
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

// 
export default Gallery;