import React from "react";
import "./Style1.css";
import img1 from "./livraison.png";
import img2 from "./Service.png";
import img3 from "./cnam.png";
import { Link } from "react-router-dom";
import facebook from "./facebook.png";
import info from "./info.png";
import product from "./product.png";
import mail from "./gmail.png";
import phone from "./telephone.png";
import adresse from "./navigation.png";
import { Button, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
import AddMessages from "../addMessages/AddMessages";

const Footer = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  return (
    <footer>
      <div className="Info">
        <div>
          <img src={img1} className="Image" alt="livraison" />{" "}
          <p className="text">
            Livraison sur le grand tunis <br></br>et nord ouest{" "}
          </p>
        </div>
        <div>
          <img src={img2} className="Image" alt="Service client" />{" "}
          <p className="text">
            Service client <br></br>(+216) 78 44 35 00{" "}
          </p>
        </div>
        <div>
          <img src={img3} className="cnam" alt="cnam" />
          <p className="cnam-text">
            Conventionné avec <br></br>la cnam{" "}
          </p>
        </div>
      </div>

      {isAuth || isAuthAdmin ? null : (
        <div className="mainfooter2">
          <div className="contain5">
            <p className="txt7">
              Inscrivez-vous pour recevoir les codes promos
            </p>
            <div className="form7">
              <FormControl placeholder="Votre adresse e-mail" />
            </div>
            <div>
              <Button className="v33" variant="light" href="/accountCreate">
                {" "}
                <span className="v3">Inscription</span>
              </Button>
            </div>
          </div>
        </div>
      )}

      {isAuthAdmin ? null : <AddMessages />}

      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <p>Informations</p>
              <div className="flex">
                <Link to="/Aproposdenous" className="path">
                  {" "}
                  <img src={info} className="ico" alt="img" /> À propos de nous
                </Link>
                <br />
                <Link to="/Produits" className="path">
                  <img src={product} className="ico" alt="img" />
                  Nos Produits
                </Link>
                <br />
                <a
                  target="_blank"
                  href="https://www.facebook.com/Nord-Medical-Servicer-Normed-762476667420585"
                  className="path"
                  rel="noreferrer"
                >
                  <img src={facebook} className="ico" alt="img" />
                  Facebook/Normed
                </a>
              </div>
            </div>

            {/* Column3 */}
            <div className="col">
              <p>Nous contacter</p>

              <a href="tel:+216-78443500" className="path">
                <img src={phone} className="ico" alt="img" />
                Tél : (+216) 78 44 35 00
              </a>
              <a href="mailto: Normed.Service@gmail.com" className="path">
                <p>
                  <img src={mail} className="ico" alt="img" /> Mail:
                  Normed.Service@gmail.com
                </p>
              </a>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/36%C2%B043'38.3%22N+9%C2%B011'03.5%22E/@36.7273056,9.1821169,17z/data=!3m1!4b1!4m6!3m5!1s0!7e2!8m2!3d36.7273082!4d9.1843095"
                className="path"
                rel="noreferrer"
              >
                <p>
                  <img src={adresse} className="ico" alt="img" />
                  Adresse:Rue 18 janvier beja nord beja ( en face boutique zen){" "}
                </p>
              </a>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Normed | All rights reserved |
              Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
