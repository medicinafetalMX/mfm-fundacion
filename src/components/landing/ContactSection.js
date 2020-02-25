import React from "react"
import { Link } from "gatsby"
import PrimaryHeader from "../primaryHeader"

const ContactSection = (props) => (
  <section className="contact">
    <div className="content-screen">
      <div className="content-box column">
        <center>
          <PrimaryHeader title="Ayúdanos a apoyar" />
          <>{props.description}</>
          <p>¡Contáctanos! Escribe un mail a
          <a className="secondary-link" href={`mailto:${props.email}?Subject=Nueva%20Pregunta`}> {props.email} </a>
            o llámanos al {props.tel}.
        </p>
          <Link to="/apoya" className="button button-cta">Contáctanos</Link>
        </center>
      </div>
    </div>
  </section>
)

export default ContactSection;
