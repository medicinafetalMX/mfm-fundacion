import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/mfm-logo.png"

const Header = () => (
  <header>
    <Link to="/" className="logo">
      <img src={logo} alt=""/>
    </Link>
    <div className="menu">
      <Link to="/" className="menu-link">Inicio</Link>
      <div className="drop-menu">
        <button className="drop-button menu-link">Acerca de</button>
        <div className="drop-content">
          <div className="top-line" />
          <Link to="/">Medicina Fetal México</Link>
          <Link to="/">La Medicina Fetal</Link>
          <Link to="/">Nuestra Trayectoria</Link>
          <Link to="/">Testimonios</Link>
        </div>
      </div>
      <Link to="/" className="menu-link">Estudios Prenatales</Link>
      <div className="drop-menu">
        <button className="drop-button menu-link">Docencia</button>
        <div className="drop-content">
          <div className="top-line" />
          <Link to="/">Cursos</Link>
          <Link to="/">Calculadoras Médicas</Link>
          <Link to="/">Investigación</Link>
        </div>
      </div>
      <Link to="/" className="menu-link">Especialistas</Link>
      <div className="menu-control">
        <div className="menu-label menu-link">Menú</div>
        <div className="burger">
          <div className="line top-line" />
          <div className="line bot-line" />
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
