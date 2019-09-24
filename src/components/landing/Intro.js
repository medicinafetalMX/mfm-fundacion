import { Link } from "gatsby"
import React from "react"

import cover from "../../images/intro.jpeg"
import facebook from "../../images/facebook.svg"
import instagram from "../../images/instagram.svg"

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
        <a href="https://instagram.com">
          <img src={instagram} alt="Visítanos en Instagram" />
        </a>
      </div>
    </div>
    <div className="text-box">
      <p>Fundación Medicina Fetal México</p>
      <h1>Nuestra misión es preservar la salud</h1>
      <Link to="/contacto" className="button button-cta">Conoce más</Link>
    </div>
    
  </section>
)

export default Intro
