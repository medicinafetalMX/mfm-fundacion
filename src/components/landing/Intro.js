import { Link } from "gatsby"
import React from "react"

import cover from "../../images/intro.jpeg"
import facebook from "../../images/facebook.svg"
import twitter from "../../images/twitter.svg"
import youtube from "../../images/youtube.svg"

const Intro = () => (
  <section className="intro">
    <div className="blank-box">
      <div className="cover">
        <img src={cover} alt="Bienvenido a Medicina Fetal México"/>
      </div>
      <div className="social-media-container">
        <a href="https://facebook.com">
          <img src={facebook} alt="Visítanos en Facebook" />
        </a>
        <a href="https://twitter.com">
          <img src={twitter} alt="Visítanos en Twitter" />
        </a>
        <a href="https://youtube.com">
          <img src={youtube} alt="Visítanos en Youtube" />
        </a>
      </div>
    </div>
    <div className="text-box">
      <p>Medicina Fetal México</p>
      <h1>Salvando vidas antes del nacimiento</h1>
      <Link to="/contacto" className="button button-cta">Contáctanos</Link>
    </div>
    
  </section>
)

export default Intro
