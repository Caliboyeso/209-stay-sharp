import React from "react";
import "./css/barbers.css";
import "./css/mediaQuery.css";
import { Card, Button } from "react-bootstrap";
import Izzy from "../img/izzy.jpg"
import StaySharp from "../img/stay-sharp209.jpg";

function Barbers() {
  return (
    <div className="Barbers-container">
      <style>@import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap');</style>
      <h1 id="Barbers-title">The Barbers</h1>

      {/* Barber Cards Row #1 */}
      <div id="Barbers-row1" className="Barbers-row1">
        <div id="Card1">
        {/* Card #1: Abdiel */}
        <Card id="Card" className="Card">
          <Card.Img
            className="Barbers-img"
            variant="top"
            src={StaySharp}
          />
          <Card.Body id="Card-body">
            <Card.Title id="Card-title">Abdiel</Card.Title>
            <div className="Card-btns">
                <Button id="Booksy-btn" target="_blank" href="https://booksy.com/en-us/162736_abdiel-chiquito_barber-shop_134738_manteca#ba_s=sr_1" variant="warning">Book Appointment</Button>
                <Button id="IG-btn" target="_blank" href="https://www.instagram.com/209staysharpbarbershop/" variant="success">Instagram</Button>
            </div>
          </Card.Body>
        </Card>
        </div>

        <div id="Card2">
        {/* Card #2: Mariah */}
        <Card id="Card" className="Card">
          <Card.Img
            className="Barbers-img"
            variant="top"
            src={StaySharp}
          />
          <Card.Body id="Card-body">
            <Card.Title id="Card-title">Mariah</Card.Title>
            <div className="Card-btns">
                <Button id="Booksy-btn" target="_blank" href="https://booksy.com/en-us/388450_mariah_barber-shop_134738_manteca#ba_s=sr_1" variant="warning">Book Appointment</Button>
                <Button id="IG-btn" target="_blank" href="https://www.instagram.com/razoriah/" variant="success">Instagram</Button>
            </div>
          </Card.Body>
        </Card>
        </div>

        <div id="Card3">
        {/* Card #3: Israel */}
        <Card id="Card" className="Card">
          <Card.Img
            className="Barbers-img"
            variant="top"
            src={Izzy}
          />
          <Card.Body id="Card-body">
            <Card.Title id="Card-title">Israel</Card.Title>
            <div className="Card-btns">
                <Button id="Booksy-btn" target="_blank" href="https://booksy.com/en-us/511111_israel-l_barber-shop_134738_manteca#ba_s=sr_1" variant="warning">Book Appointment</Button>
                <Button id="IG-btn" target="_blank" href="https://www.instagram.com/eskeletoblendz/" variant="success">Instagram</Button>
            </div>
          </Card.Body>
        </Card>
        </div>
      </div>

    </div>
  );
}

export default Barbers;