import React from "react"
import { Link } from "gatsby"
import PrimaryHeader from "../primaryHeader"

const ContactSection = () => (
  <section className="contact">
    <div className="row">
      <div className="map">

      </div>
      <div className="content-box column">
        <PrimaryHeader title="Estamos cerca de ti" />
        <p>
          Envíanos un mensaje o contáctanos en alguno de nuestros centros médicos.
        </p>
        <Link to="/contacto" class="button button-cta">Enviar Mensaje</Link>
        <div className="locations-container">
          <ul>
            <li>Hospital Star Médica Querétaro</li>
            <li>Departamento de Medicina y Cirugía Fetal</li>
            <li>Ciudad de México</li>
            <li>Morelia, Michoacán</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default ContactSection
