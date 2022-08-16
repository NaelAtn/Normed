import React from "react";
import "./Style.css";
import clock from "./clock.png";

const Info = () => {

  return (
    <div className="top-nav">


      <p className="serviceclient">
        <img className="clock" src={clock} alt="icon-clock" />
        Lun→Ven : 08h30→18h
      </p>

      <p className="serviceclient">
        ☎ Service client : (+216) 78 44 35 00{" "}
        <span>/✉ Mail: Normed.Service@gmail.com</span>
      </p>
    </div>
  );
};

export default Info;
