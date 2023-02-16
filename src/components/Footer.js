import { Link } from "gatsby"
import React from "react"
import IconFb from "../images/facebook.svg"
import IconInsta from "../images/insta.png"
import SocialLink from "./SocialLink"
const Footer = () => {
  return (
    <footer className="footer column">
      <div className="footer-content content-screen">
        <div className="main-content">
          <div
            className="footer-links"
            style={{ flex: 1, justifyContent: "space-between" }}
          >
            <div className="column" style={{}}>
              <h4>Enlaces</h4>
              <Link className="link" to="/">
                Inicio
              </Link>
              <Link className="link" to="/miembarazo">
                Mi Embarazo
              </Link>
              <Link className="link" to="/eventos">
                Eventos
              </Link>
              <Link className="link" to="/foro">
                Foro
              </Link>
              <Link className="link" to="/apoya">
                Cómo apoyar
              </Link>
            </div>
            <div className="column">
              <h4>Conócenos</h4>
              <Link className="link" to="/fetoton">
                FETOTON
              </Link>
              <Link className="link" to="/investigacion">
                Investigación
              </Link>
            </div>
            <div className="column" style={{}}>
              <h4>Enlaces</h4>
              <a className="link" href="https://medicinafetalmexico.com">
                Fundacion MFM
              </a>
            </div>
          </div>
        </div>
        <div className="social-links row">
          <SocialLink
            onlyIcon
            colorIcon="white-icon"
            url="https://www.facebook.com/fundacionmedfetalmexico"
          >
            <img src={IconFb} alt="" />
          </SocialLink>
          <SocialLink
            onlyIcon
            colorIcon="white-icon"
            url="https://www.instagram.com/fundacionmedicinafetalmexico/"
          >
            <img src={IconInsta} alt="" />
          </SocialLink>
        </div>
        <hr></hr>
        <div className="row footer-bottom">
          <p>Copyright © 2019. Derechos Reservados </p>
          <Link className="link" to="/avisoprivacidad">
            {" "}
            aviso de privacidad{" "}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
