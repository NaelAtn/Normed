import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import ContactUs from "../ContactUs/ContactUs";
import Products from "../Products/Products";
import "./Home.css";

const Home = ({ filtredProducts }) => {
  const myRef = useRef(null);
  const scroldown = () => myRef.current.scrollIntoView();

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Vente ,Réparation ,Location Du Matériel Médical,Tunisie</title>
        <link rel="canonical" />
      </Helmet>
      <h2 className="welcome">BIENVEUNE CHEZ</h2>
      <h1>
        <p className="normed"> NORD MEDICAL SERVICE</p>
      </h1>

      <p className="best">Le meilleur du matériel médical</p>
      <p className="best">Conventionné avec la cnam</p>
      <div>
        <div>
          <div className="Banner">
            <p className="text1">
              {" "}
              <p className="ContainerHome">
                Le concentrateur d'oxygène fixe et/ou de déambulation est un
                dispositif médical destiné aux personnes souffrant
                d'insuffisance respiratoire ,il permet d'administrer de l'air
                enrichi en oxygène sur prescription médicale.<br></br>Normed
                vous offre une sélection de concentrateurs d’oxygène fixe comme
                le Sysmed qui est un concentrateur avec une livraison jusqu'à
                5L/10min et plusieurs autres articles.
                <p onClick={scroldown} className="voirplus">
                  Voir plus⋙{" "}
                </p>{" "}
              </p>{" "}
            </p>
          </div>
        </div>
      </div>

      <div ref={myRef}>
        {<Products filtredProducts={filtredProducts} />}
        
      </div>

      <ContactUs />
    </div>
  );
};

export default Home;
