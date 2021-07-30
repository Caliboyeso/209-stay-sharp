import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from "./components/Background/background.jsx";
import NavBar from "./components/Navbar/navbar.jsx";
import Barbers from "./components/Barbers/barbers.jsx";
import Gallery from "./components/Gallery/gallery.jsx";
import Contact from "./components/Contact/contact.jsx";
import Footer from "./components/Footer/footer.jsx";

function App() {
  return (
    <div className="App">
      
      <Background />
      <NavBar />
      <Barbers />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;