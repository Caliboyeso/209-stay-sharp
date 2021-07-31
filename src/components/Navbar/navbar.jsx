import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./css/navbar.css";
import "./css/mediaQuery.css";
import StaySharp from "../img/stay-sharp209.jpg";

function NavBar() {

  // 
  const GoHome = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  };

  // 
  const NavBarbers = () => {
    if (window.matchMedia("(min-width: 1920px)").matches) {
        window.scrollTo({top: 990, behavior: "smooth"});
    } else if (window.matchMedia("(min-width: 1280px)").matches) {
        window.scrollTo({top: 696, behavior: "smooth"});
    } else {
        window.scrollTo({top: 696, behavior: "smooth"});
    }
};

// 
const NavGallery = () => {
  if (window.matchMedia("(min-width: 1920px)").matches) {
      window.scrollTo({top: 1885, behavior: "smooth"});
  } else if (window.matchMedia("(min-width: 1280px)").matches) {
      window.scrollTo({top: 1376, behavior: "smooth"});
  } else {
      window.scrollTo({top: 696, behavior: "smooth"});
  }
};

// 
const NavContact = () => {
  if (window.matchMedia("(min-width: 1920px)").matches) {
      window.scrollTo({top: 3540, behavior: "smooth"});
  } else if (window.matchMedia("(min-width: 1280px)").matches) {
      window.scrollTo({top: 2801, behavior: "smooth"});
  } else {
      window.scrollTo({top: 695, behavior: "smooth"});
  }
}
  
    return (

        <Navbar
    className="Navbar"
    id="Navbar"
    collapseOnSelect
    expand="lg"
    bg="dark"
    variant="dark"
  >
    <Container>
      <Navbar.Brand id="Nav-home" onClick={GoHome}>
        <img id="stay-sharp-img" src={StaySharp} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="Nav-links">
          {/* About Navbar */}
          <a id="Nav-barbers" onClick={NavBarbers}>
            Barbers
          </a>

          {/* Projects Navbar */}
          <a id="Nav-gallery" onClick={NavGallery}>
            Gallery
          </a>

          {/* Contact Navbar */}
          <a id="Nav-contact" onClick={NavContact}>
            Contact
          </a>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>

    )

};

export default NavBar;
