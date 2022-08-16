import React from "react";
import { Helmet } from "react-helmet";

import ContactUs from "../ContactUs/ContactUs";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>À PROPOS</title>
        <link rel="canonical" />
      </Helmet>
      <h1 className="About">À PROPOS DE NOUS</h1>

      <div className="descriptionNormed2">
        <div className="descriptionNormed">
          <p className="textdescription">
            Fondée en <span className="destxt">2015</span>, par{" "}
            <span className="destxt">Mr.JASSEM HAFSI</span> ,{" "}
            <span className="descrNormed">NORMED</span> s’est imposée sur le
            marché national par son sérieux et professionnalisme.{" "}
          </p>
          <p className="textdescription">
            Avec plus de <span className="destxt">10 ans d’expériences</span>,{" "}
            <span className="descrNormed">NORMED</span> a su progresser dans le
            domaine des solutions apportées au secteur médical.{" "}
          </p>
          <p className="textdescription">
            Notre <span className="destxt">objectif initial</span> est d’écouter
            nos clients et nos patients pour mieux les servir, sur tout le
            territoire national, de façon pertinente et professionnelle.
          </p>
          <p className="textdescription">
            Outre la vente d’équipements et de consommables médicaux ,{" "}
            <span className="descrNormed">NORMED</span> se différentie par ses
            services d’entretien et de réparation, à forte réactivité et
            proximité de ses clients, grâce à notre structure commerciale,
            administrative, technique et logistique.
          </p>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default AboutUs;
