import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import logo from "../images/mfmflogo.png"
import MenuHamburger from "./MenuHamburger";
import MenuMobile from "./MenuMobile";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  render() {
    return (
      <header className={this.state.isMenuOpen ? 'header-fixed' : ''}>
        <Link to="/" className="logo">
          <img src={logo} alt="" />
        </Link>
        <div className="menu">
          <Link to="/" className="menu-link">Inicio</Link>
          <div className="drop-menu">
            <button className="drop-button menu-link">Acerca de</button>
            <div className="drop-content">
              <div className="top-line" />
              <Link to="/">Educación</Link>
              <Link to="/">Investigación</Link>
              <Link to="/">Labor Social</Link>
              <Link to="/">Neurodesarrollo</Link>
            </div>
          </div>
          <Link to="/" className="menu-link">Mi Embarazo</Link>
          <Link to="/" className="menu-link">Eventos</Link>
          <Link to="/" className="menu-link">Foros</Link>
          <Link to="/" className="menu-link">Conócenos</Link>
        </div>
        <MenuHamburger
          isMenuOpen={this.state.isMenuOpen}
          changeState={this.toggleMenu}
        />
        <MenuMobile isMenuOpen={this.state.isMenuOpen} />
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
