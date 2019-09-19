import React from "react"
import PrimaryHeader from "../primaryHeader"
import PrimaryLink from "../primaryLink"

import surgeon from "../../images/surgeon1.png"

const About = () => (
  <section className="about">
    <div className="content-screen">
      <div className="row">
        <img src={surgeon} alt="" className="image-content" />
        <div className="column content-box">
          <PrimaryHeader title="Expertos en diagnóstico prenatal avanzado" />
          <p>
            Proporcionamos atención integral avanzada para el cuidado de la salud y seguridad tanto de la madre como del bebé en vida fetal, por medio de la última tecnología y de nuestro personal altamente calificado.
          </p>
          <PrimaryLink toPage="/medicinafetalmexico" text="Acerca de Medicina Fetal México" />
        </div>
      </div>
    </div>
  </section>
)

export default About
