import React from "react"
import PrimaryHeader from "../primaryHeader"
import PrimaryLink from "../primaryLink"

import image from "../../images/home/quirofano.jpg"

const HistoryBlock = () => (
  <section className="history">
    <div className="content-screen">
      <PrimaryHeader title="Cuidamos la salud madre e hijo" />
      <div className="row">
        <div className="column content-box">
          <p>
            Somos una fundación sin fines de lucro que cuenta con tres objetos sociales: educación médica contínua, investigación, labor social.
          </p>
          <p>
            Proporcionamos atención integral avanzada para el cuidado de la salud y seguridad tanto de la madre como del bebé en vida fetal, por medio de la última tecnología y de nuestro personal altamente calificado.
          </p>
          <PrimaryLink toPage="/conocenos" text="Conoce más" />
        </div>
        <div className="image-content">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  </section>
)

export default HistoryBlock
