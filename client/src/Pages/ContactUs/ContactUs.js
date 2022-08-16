import React from "react";
import "./ContactUs.css";
import messenger from "./messenger.png";
import phone from "./phone.png";
import mail from "./gmail.png";
import map from "./map.png";

const ContactUs = () => {
  return (
    <div>
      <h1 className="normed">CONTACTEZ NOUS</h1>
      <div className="contain" style={{ width: "35rem" }}>
        <a
          target="_blank"
          href="https://www.facebook.com/messages/t/762476667420585"
          rel="noreferrer"
        >
          <img className="icon" src={messenger} alt="img" />
        </a>
        <a href="tel:+216-78443500">
          <img className="icon" src={phone} alt="icon" />
        </a>
        <a
          target="_blank"
          href="mailto: Normed.Service@gmail.com"
          rel="noreferrer"
        >
          <img className="icon" src={mail} alt="img" />
        </a>
      </div>
      <h1 className="normed">RENDEZ NOUS VISITE</h1>
      <div>
        <a
          target="_blank"
          href="https://www.google.com/maps/place/36%C2%B043'38.3%22N+9%C2%B011'03.5%22E/@36.7273056,9.1821169,17z/data=!3m1!4b1!4m6!3m5!1s0!7e2!8m2!3d36.7273082!4d9.1843095"
          rel="noreferrer"
        >
          <img src={map} className="icon2" alt="img" />
        </a>
      </div>

      <div></div>
    </div>
  );
};

export default ContactUs;
