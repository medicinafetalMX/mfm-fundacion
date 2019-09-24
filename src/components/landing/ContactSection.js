import React from "react"
import { Link } from "gatsby"
import PrimaryHeader from "../primaryHeader"

const ContactSection = () => (
  <section className="contact">
    <div className="content-screen">
      <div className="content-box column">
        <PrimaryHeader title="Ayúdanos a apoyar" />
        <p>
          ¿Deseas apoyar a una familia para que regresen con su bebé en brazos a casa?
        </p>
        <Link to="/contacto" className="button button-cta">Contáctanos</Link>
      </div>
    </div>
  </section>
)

export default ContactSection;
