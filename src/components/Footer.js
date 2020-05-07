import { Link } from "gatsby"
import React from "react"
import IconFb from "../images/facebook.svg"
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
              <Link className="link" to="/compartim">
                Proyecto Compartim
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
            url="https://www.facebook.com/medfetalmexico/"
          >
            <img src={IconFb} alt="" />
          </SocialLink>
        </div>
        <hr></hr>
        <div className="row footer-bottom">
          
          <p>Copyright © 2019. Derechos Reservados </p>
          <a>Aviso de Privacidad</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
