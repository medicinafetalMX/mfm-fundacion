import React from "react"
import { Link } from "gatsby"
import PrimaryHeader from "../primaryHeader"

const ContactSection = (props) => (
  <section className="contact">
    <div className="content-screen">
      <div className="content-box column">
        <PrimaryHeader title="Ayúdanos a apoyar" />
        <center>
          <p>{props.description}</p>
          <p><b>Nombre de la fundación: </b>{props.fundacion}</p>
          <p><b>Banco: </b>{props.banco}</p>
          <p><b>No. Cuenta: </b>{props.cuenta}</p>
          <p><b>CLABE: </b>{props.clabe}</p>

          <p>
            ¡Contáctanos! Escribe un mail a
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
